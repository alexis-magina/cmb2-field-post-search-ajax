<?php
/*
 * Example setup for cmb2 custom field : post search ajax.
 */
/**
 * Define the metabox and field configurations.
 *
 * @param  array $meta_boxes
 * @return array
 */
function cmb2_post_search_ajax_metaboxes_example() {
	
	$example_meta = new_cmb2_box( array(
		'id'           => 'cmb2_post_search_ajax_field',
		'title'        => __( 'Related Posts', 'cmb2' ),
		'object_types' => array( 'post' ), // Post type
		'context'      => 'normal',
		'priority'     => 'high',
		'show_names'   => true, // Show field names on the left
	) );
	
	$example_meta->add_field( array(
		'name'      	=> __( 'Example Multiple', 'cmb2' ),
		'id'        	=> 'cmb2_post_search_ajax_demo_multiple',
		'type'      	=> 'post_search_ajax',
		'desc'			=> __( '(Start typing post title)', 'cmb2' ),
		// Optional :
		'limit'      	=> 10, 		// Limit selection to X items only (default 1)
		'sortable' 	 	=> true, 	// Allow selected items to be sortable (default false)
		'query_args'	=> array(
			'post_type'			=> array( 'post' ),
			'post_status'		=> array( 'publish' ),
			'posts_per_page'	=> -1
		)
	) );
	
	$example_meta->add_field( array(
		'name'      	=> __( 'Example Single', 'cmb2' ),
		'id'        	=> 'cmb2_post_search_ajax_demo_single',
		'type'      	=> 'post_search_ajax',
		'desc'			=> __( '(Start typing post title)', 'cmb2' ),
		// Optional :
		'limit'      	=> 1, 		// Limit selection to X items only (default 1)
		'sortable' 	 	=> false, 	// Allow selected items to be sortable (default false)
		'query_args'	=> array(
			'post_type'			=> array( 'post' ),
			'post_status'		=> array( 'publish' ),
			'posts_per_page'	=> -1
		)
	) );

	$example_meta->add_field( array(
		'name'      	=> __( 'Test user multiple', 'cmb2' ),
		'id'        	=> 'cmb2_post_search_ajax_demo_user_multiple',
		'type'      	=> 'post_search_ajax',
		'desc'			=> __( '(Start typing post title)', 'cmb2' ),
		// Optional :
		'limit'      	=> 10, 		// Limit selection to X items only (default 1)
		'sortable' 	 	=> true, 	// Allow selected items to be sortable (default false)
		'object_type'	=> 'user',	// Define queried object type (Available : post, user, term - Default : post)
		'query_args'	=> array(
			'blog_id' => '1',
		)
	) );

	$example_meta->add_field( array(
		'name'      	=> __( 'Test user single', 'cmb2' ),
		'id'        	=> 'cmb2_post_search_ajax_demo_user_single',
		'type'      	=> 'post_search_ajax',
		'desc'			=> __( '(Start typing post title)', 'cmb2' ),
		// Optional :
		'limit'      	=> 1, 		// Limit selection to X items only (default 1)
		'sortable' 	 	=> false, 	// Allow selected items to be sortable (default false)
		'object_type'	=> 'user',	// Define queried object type (Available : post, user, term - Default : post)
		'query_args'	=> array(
			 'role' => 'Administrator'
		)
	) );
	
}
add_action( 'cmb2_init', 'cmb2_post_search_ajax_metaboxes_example' );
