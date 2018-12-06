<?php
/**
 * PrivacyPlugin are able to handle user data according the privacy policy.
 *
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU General Public License as
 * published by the Free Software Foundation; either version 2 of
 * the License, or (at your option) any later version.
 *
 * @author      Timo Hartge <hartge@data-quest.de>
 * @license     http://www.gnu.org/licenses/gpl-2.0.html GPL version 2
 * @category    Stud.IP
 */

interface PrivacyPlugin
{
    /**
     * Return a storage object (an instance of the StoredUserData class)
     * containing the available data of a given user. You may also return
     * null to indicate that no user data is stored.
     *
     * @return StoredUserData object
     */
    public function getUserData($user_id);
}
