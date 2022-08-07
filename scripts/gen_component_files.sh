#!/bin/bash

srcDir="../src/components/"
exts=(".stories.tsx" ".styles.scss" ".tsx" ".types.ts")

if [ -z "$1" ]
then
	echo No component name provided. Exiting
else
	if [ -n "$2" ]
	then
		fileDir="${srcDir}${2}/${1}"
	else
		fileDir="${srcDir}${1}"
	fi

	mkdir $fileDir

	for ext in "${exts[@]}"
	do
		filePath="${fileDir}/${1}${ext}"
		touch "${fileDir}/index.ts"
		touch $filePath
		echo created $filePath
	done
fi
