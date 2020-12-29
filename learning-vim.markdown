---
layout: page 
title:  "Learning Vim"
---

- The command `:e` stands for edit and allows you to open another file in the current buffer.
- `control+g` refreshes the status line.
- `?foo` searches the text *foo* backwards.
- `:43` or `43 shift-g` moves the cursor to the line 43.
- You can open a file and immediately execute a command. This example will open the file on line 43: `vim file.txt +43`.
- `shift-p` pastes before cursor.
- `xp` swaps two characters.
- `ctrl-d` and `ctrl-u` moves between pages.
- `.` repeats the previous command from the current cursor position.
- `:%s/foo/bar/gc` requires confirmation for each replacement.
- `ma` defines a mark named "a" and `'a` jumps to it.
- `ctrl+o` and `ctrl-i` provides navigation history.
- `:e!` reverts any change in current file.

## Modes
- You can return to normal mode pressing `Esc` or `control-c`.

## Motions
- `(` and `)` moves between sentences. `{` and `}` moves through paragraphs.
- `e` moves to the end of the current word.

## Search
- With `*`/`#` you jump to the next or previous matching word.

## Buffers
- `yy` copies the current line to the default buffer.
- `bd` deletes the current buffer.

## Multiple windows
- `:ls` shows a list of opened windows
- `:only` keeponly this window open
