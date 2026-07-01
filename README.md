# iLearn Theme

Theming of the iLearn Portal's Landing page through JavaScript.

## How to Setup

1. Within iLearn, click on edit, create a new `Textblock`.
2. Move the `Textblock` to the bottom. Ensure that it is the last element, because of the execution order.
3. On the `Textblock`, go to configure and click the expander on the content section.
4. Enable `HTML` (click on the `</>`-Button).
5. In the content-field, paste:
    ```html
    <script>
        
    </script>
    ```
6. Use one of the two supported variants:
    - Paste the contents of `ilearn.js` between the `<script>` tags if you want the older, smaller setup.
    - Paste the HTML code from `ilearn_styling.html` between the `<script>` tags if you want the full themed version from this repo.
7. Optionally, adjust the background or colors with the variables available at the top of the file.
    The username gets fetched automatically from the HTML source.
8. Save changes.
9. Make sure the "Favourite Courses" widget exists. If it is missing, add it first, then move it all the way to the top so the offset calculation works correctly.
10. Disable edit mode and enjoy.

## Version History

- `ilearn.js`: older minimal version with the original wallpaper and basic widget styling.
- `ilearn_styling.html`: current full version with selectable backgrounds, animated headlines, and extended header styling.
- The repo keeps both variants so you can either use the lightweight script or copy the full HTML block into the iLearn `Textblock`.
