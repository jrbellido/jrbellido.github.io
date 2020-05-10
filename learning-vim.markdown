---
layout: page 
title:  "Learning Vim"
---

* You can return to normal mode pressing ```Esc``` or ```control-c```.
* The command ```:e``` stands for edit and allows you to open another file in the current buffer.
* ```control+g``` refreshes the status line.
* ```e``` moves to the end of the current word.
* ```(``` and ```)``` moves between sentences. ```{``` and ```}``` moves through paragraphs.
* ```?foo``` searches the text *foo* backwards.
* ```:43``` or ```43 shift-g``` moves the cursor to the line 43.
* You can open a file and immediately execute a command. This example will open the file on line 43: ```vim file.txt +43```.
* With ```*```/```#``` you jump to the next or previous matching word.
* ```shift-p``` pastes before cursor.
* ```yy``` copies the current line.
* ```xp``` swaps two characters.
* ```ctrl-d``` and ```ctrl-u``` moves between pages.
* ```.``` repeats the previous command from the current cursor position.
* ```/s/foo/bar/gc``` requires confirmation for each replacement.
* ```ma``` defines a mark named 'a' and ```'a``` jumps to it.
* ```bd``` deletes the current buffer.
* ```ctrl+o``` and ```ctrl-i``` provides navigation history.
* ```'.``` navigates to the previous change position.
* ```:e!``` reverts any change in current file.
