#!/bin/bash

OLD_RELEASE="17\.03"
NEW_RELEASE="18\.05"

for i in content/download/flavours/cloud/*.md content/download/flavours/desktop/*.md content/download/flavours/server/*.md; do
    sed -i "s/$OLD_RELEASE/$NEW_RELEASE/g" $i || die "$i: could not replace release here"
done

exit 0
