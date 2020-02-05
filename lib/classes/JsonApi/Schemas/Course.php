<?php

namespace JsonApi\Schemas;

use JsonApi\Routes\Files\Authority as FilesAuth;
use Neomerx\JsonApi\Document\Link;

class Course extends SchemaProvider
{
    const TYPE = 'courses';

    const REL_BLUBBER = 'blubber-threads';
    const REL_END_SEMESTER = 'end-semester';
    const REL_EVENTS = 'events';
    const REL_FILES = 'file-refs';
    const REL_FOLDERS = 'folders';
    const REL_FORUM_CATEGORIES = 'forum-categories';
    const REL_MEMBERSHIPS = 'memberships';
    const REL_NEWS = 'news';
    const REL_START_SEMESTER = 'start-semester';
    const REL_WIKI_PAGES = 'wiki-pages';
    const REL_INSTITUTE = 'institute';

    protected $resourceType = self::TYPE;

    public function getId($course)
    {
        return $course->seminar_id;
    }

    public function getAttributes($course)
    {
        $stringOrNull = function ($item) {
            return trim($item) != '' ? (string) $item : null;
        };

        return [
            'course-number' => $stringOrNull($course->veranstaltungsnummer),

            'title' => (string) $course->name,
            'subtitle' => $stringOrNull($course->untertitel),
            'course-type' => (int) $course->status,
            'description' => $stringOrNull($course->beschreibung),
            'location' => $stringOrNull($course->ort),
            'miscellaneous' => $stringOrNull($course->sonstiges),

            // 'read-access' => (int) $course->lesezugriff,
            // 'write-access' => (int) $course->schreibzugriff,
        ];
    }

    public function getRelationships($course, $isPrimary, array $includeList)
    {
        $relationships = [];

        $relationships[self::REL_INSTITUTE] = $this->getInstitute($course, in_array(self::REL_INSTITUTE, $includeList));

        if ($semester = $this->getStartSemester($course)) {
            $relationships[self::REL_START_SEMESTER] = $semester;
        }
        if ($semester = $this->getEndSemester($course)) {
            $relationships[self::REL_END_SEMESTER] = $semester;
        }

        $relationships = $this->getFilesRelationship($relationships, $course);
        $relationships = $this->getForumCategoriesRelationship($relationships, $course, $includeList);
        $relationships = $this->getBlubberRelationship($relationships, $course, $includeList);
        $relationships = $this->getEventsRelationship($relationships, $course, $includeList);
        $relationships = $this->getMembershipsRelationship($relationships, $course, $includeList);
        $relationships = $this->getNewsRelationship($relationships, $course, $includeList);
        $relationships = $this->getWikiPagesRelationship($relationships, $course, $includeList);

        return $relationships;
    }

    /**
     * @SuppressWarnings(PHPMD.UnusedFormalParameter)
     */
    private function getInstitute(\Course $course, $shouldInclude)
    {
        return [
            self::LINKS => [
                Link::RELATED => new Link('/institutes/'.$course->institut_id),
            ],
            self::DATA => $course->home_institut,
        ];
    }

    private function getStartSemester(\Course $course)
    {
        if (!$semester = \Semester::findByTimestamp($course->start_time)) {
            return null;
        }

        return [
            self::LINKS => [
                Link::RELATED => new Link('/semesters/'.$semester->id),
            ],
            self::DATA => $semester,
        ];
    }

    private function getEndSemester(\Course $course)
    {
        if (!$semester = \Semester::findByTimestamp($course->end_time)) {
            return null;
        }

        return [
            self::LINKS => [
                Link::RELATED => new Link('/semesters/'.$semester->id),
            ],
            self::DATA => $semester,
        ];
    }

    private function getFilesRelationship(array $relationships, \Course $resource)
    {
        $user = $this->getDiContainer()->get('studip-current-user');

        if ($user && FilesAuth::canShowFileArea($user, $resource)) {
            $filesLink = $this->getRelationshipRelatedLink($resource, self::REL_FILES);

            $relationships[self::REL_FILES] = [
                self::LINKS => [
                    Link::RELATED => $filesLink,
                ],
            ];

            $foldersLink = $this->getRelationshipRelatedLink($resource, self::REL_FOLDERS);
            $relationships[self::REL_FOLDERS] = [
                self::LINKS => [
                    Link::RELATED => $foldersLink,
                ],
            ];
        }

        return $relationships;
    }

    /**
     * @SuppressWarnings(PHPMD.UnusedFormalParameter)
     */
    private function getForumCategoriesRelationship(
        array $relationships,
        \Course $course,
        $includeData
    ) {
        $relationships[self::REL_FORUM_CATEGORIES] = [
            self::LINKS => [
                Link::RELATED => $this->getRelationshipRelatedLink($course, self::REL_FORUM_CATEGORIES)
            ],
        ];

        return $relationships;
    }

    /**
     * @SuppressWarnings(PHPMD.UnusedFormalParameter)
     */
    private function getBlubberRelationship(
        array $relationships,
        \Course $course,
        $includeData
    ) {
        $relationships[self::REL_BLUBBER] = [
            self::LINKS => [
                Link::RELATED => $this->getRelationshipRelatedLink($course, self::REL_BLUBBER),
            ],
        ];

        return $relationships;
    }

    /**
     * @SuppressWarnings(PHPMD.UnusedFormalParameter)
     */
    private function getEventsRelationship(
        array $relationships,
        \Course $course,
        $includeData
    ) {
        $relationships[self::REL_EVENTS] = [
            self::LINKS => [
                Link::RELATED => $this->getRelationshipRelatedLink($course, self::REL_EVENTS)
            ],
        ];

        return $relationships;
    }

    /**
     * @SuppressWarnings(PHPMD.UnusedFormalParameter)
     */
    private function getMembershipsRelationship(
        array $relationships,
        \Course $course,
        $includeData
    ) {
        $relationships[self::REL_MEMBERSHIPS] = [
            self::SHOW_SELF => true,
            self::LINKS => [
                Link::RELATED => $this->getRelationshipRelatedLink($course, self::REL_MEMBERSHIPS)
            ],
        ];

        return $relationships;
    }

    /**
     * @SuppressWarnings(PHPMD.UnusedFormalParameter)
     */
    private function getNewsRelationship(
        array $relationships,
        \Course $course,
        $includeData
    ) {
        $relationships[self::REL_NEWS] = [
            self::LINKS => [
                Link::RELATED => $this->getRelationshipRelatedLink($course, self::REL_NEWS)
            ],
        ];

        return $relationships;
    }

    /**
     * @SuppressWarnings(PHPMD.UnusedFormalParameter)
     */
    private function getWikiPagesRelationship(
        array $relationships,
        \Course $course,
        $includeData
    ) {
        $relationships[self::REL_WIKI_PAGES] = [
            self::LINKS => [
                Link::RELATED => $this->getRelationshipRelatedLink($course, self::REL_WIKI_PAGES)
            ],
        ];

        return $relationships;
    }
}
