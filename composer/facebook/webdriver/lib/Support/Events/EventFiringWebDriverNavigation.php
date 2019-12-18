<?php
// Copyright 2004-present Facebook. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

namespace Facebook\WebDriver\Support\Events;

use Facebook\WebDriver\Exception\WebDriverException;
use Facebook\WebDriver\WebDriverDispatcher;
use Facebook\WebDriver\WebDriverNavigation;

class EventFiringWebDriverNavigation
{
    /**
     * @var WebDriverNavigation
     */
    protected $navigator;
    /**
     * @var WebDriverDispatcher
     */
    protected $dispatcher;

    /**
     * @param WebDriverNavigation $navigator
     * @param WebDriverDispatcher $dispatcher
     */
    public function __construct(WebDriverNavigation $navigator, WebDriverDispatcher $dispatcher)
    {
        $this->navigator = $navigator;
        $this->dispatcher = $dispatcher;
    }

    /**
     * @return WebDriverDispatcher
     */
    public function getDispatcher()
    {
        return $this->dispatcher;
    }

    /**
     * @return WebDriverNavigation
     */
    public function getNavigator()
    {
        return $this->navigator;
    }

    /**
     * @throws WebDriverException
     * @return $this
     */
    public function back()
    {
        $this->dispatch(
            'beforeNavigateBack',
            $this->getDispatcher()->getDefaultDriver()
        );
        try {
            $this->navigator->back();
        } catch (WebDriverException $exception) {
            $this->dispatchOnException($exception);
        }
        $this->dispatch(
            'afterNavigateBack',
            $this->getDispatcher()->getDefaultDriver()
        );

        return $this;
    }

    /**
     * @throws WebDriverException
     * @return $this
     */
    public function forward()
    {
        $this->dispatch(
            'beforeNavigateForward',
            $this->getDispatcher()->getDefaultDriver()
        );
        try {
            $this->navigator->forward();
        } catch (WebDriverException $exception) {
            $this->dispatchOnException($exception);
        }
        $this->dispatch(
            'afterNavigateForward',
            $this->getDispatcher()->getDefaultDriver()
        );

        return $this;
    }

    /**
     * @throws WebDriverException
     * @return $this
     */
    public function refresh()
    {
        try {
            $this->navigator->refresh();

            return $this;
        } catch (WebDriverException $exception) {
            $this->dispatchOnException($exception);
            throw $exception;
        }
    }

    /**
     * @param mixed $url
     * @throws WebDriverException
     * @return $this
     */
    public function to($url)
    {
        $this->dispatch(
            'beforeNavigateTo',
            $url,
            $this->getDispatcher()->getDefaultDriver()
        );

        try {
            $this->navigator->to($url);
        } catch (WebDriverException $exception) {
            $this->dispatchOnException($exception);
            throw $exception;
        }

        $this->dispatch(
            'afterNavigateTo',
            $url,
            $this->getDispatcher()->getDefaultDriver()
        );

        return $this;
    }

    /**
     * @param mixed $method
     * @param mixed ...$arguments
     */
    protected function dispatch($method, ...$arguments)
    {
        if (!$this->dispatcher) {
            return;
        }

        $this->dispatcher->dispatch($method, $arguments);
    }

    /**
     * @param WebDriverException $exception
     */
    protected function dispatchOnException(WebDriverException $exception)
    {
        $this->dispatch('onException', $exception);
    }
}
