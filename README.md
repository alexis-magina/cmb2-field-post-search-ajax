CMB2 custom field "post_search_ajax"
==================

Custom field for [CMB2](https://github.com/WebDevStudios/CMB2) to attach posts to each others.

Same approach than [CMB2 Attached Posts Field](https://github.com/WebDevStudios/cmb2-attached-posts/) with Ajax request, multiple/single option, and different UI.

## Installation

You can install this field type as you would a WordPress plugin:

- Download the plugin
- Place the plugin folder in your /wp-content/plugins/ directory
- Activate the plugin in the Plugin dashboard

## Usage - Admin

Follow the example in [`example-field-setup.php`](https://github.com/alexis-magina/cmb2-field-post-search-ajax/blob/master/example-field-setup.php) for a demonstration.

Options : 
- limit (int, default = 1 : single selection) : limit the number of posts that can be selected
- sortable (bool, default = false) : Allow selected posts to be sort
- query_args (array) : setup the ajax search query : pass a wp_query args array.

## Usage - FrontEnd

You can retrieve the meta data using get_post_meta( get_the_ID(), 'your_field_id', true ); 

If field limit > 1, this will return an array of attached post IDs.
If field limit == 1, this will return only the single attached post ID.

## Screenshot

![example](https://github.com/alexis-magina/cmb2-field-post-search-ajax/blob/master/example.gif)

## Changelog

### 1.0.0
* Initial commit
