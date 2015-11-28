#!/bin/bash

OLD_RELEASE="15\.11"
NEW_RELEASE="15\.12"

for i in content/cloud.md content/desktop.md content/server.md; do
    sed -i "s/$OLD_RELEASE/$NEW_RELEASE/g" $i || die "$i: could not replace release here"
done

exit 0
