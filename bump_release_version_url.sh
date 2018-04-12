#!/bin/bash

OLD_RELEASE="17\.03"
NEW_RELEASE="18\.04"

for i in content/cloud.md content/desktop.md content/server.md; do
    sed -i "s/$OLD_RELEASE/$NEW_RELEASE/g" $i || die "$i: could not replace release here"
done

exit 0
