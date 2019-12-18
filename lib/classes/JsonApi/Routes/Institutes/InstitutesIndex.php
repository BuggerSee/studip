<?php

namespace JsonApi\Routes\Institutes;

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use JsonApi\JsonApiController;

class InstitutesIndex extends JsonApiController
{
    protected $allowedIncludePaths = [];

    protected $allowedPagingParameters = ['offset', 'limit'];

    public function __invoke(Request $request, Response $response, $args)
    {
        list($offset, $limit) = $this->getOffsetAndLimit();
        $institutes = \Institute::findBySql('1 ORDER BY Name LIMIT ? OFFSET ?', [$limit, $offset]);
        $total = \Institute::countBySql();

        return $this->getPaginatedContentResponse($institutes, $total);
    }
}
