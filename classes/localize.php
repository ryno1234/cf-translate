<?php

/**
 * Sets up the CFTRANS object for amdin
 *
 * @package CF_Translate
 * @author    Josh Pollock <Josh@CalderaWP.com>
 * @license   GPL-2.0+
 * @link
 * @copyright 2016 CalderaWP LLC
 */
class CF_Translate_Localize {

    /**
     * Current form
     *
     * Not always set!
     *
     * @since 0.1.0
     *
     * @var CF_Translate_Form|null
     */
	protected $form;

	/**
	 * CF_Translate_Localize constructor.
	 *
	 * @since 0.1.0
	 *
	 * @param CF_Translate_Form|null $form
	 */
	public function __construct( CF_Translate_Form $form = null ) {
		$this->form = $form;
	}

	/**
	 * Get data formatted as array
	 *
	 * @since 0.1.0
	 *
	 * @return array
	 */
	public function to_array(){
		$data = array(
			'strings' => $this->strings(),
			'data' => $this->data(),
			'local' => get_locale(),
			'form' => array(
				'ID' => 0,
				'languages' => array(),
				'fields' => array(),
				'form_info' => array( 'name' => '' )
			),

		);

		if( ! empty( $this->form ) ){
			$data[ 'form' ] = array(
				'ID' => $this->form->get_id(),
				'languages' => $this->form->get_translator()->get_languages(),
				'form_info' => $this->form_info()
			);
            foreach( $data[ 'form' ][ 'languages' ] as $language ){
                $fields =  $this->form->get_translator()->get_fields( $language );
                if( ! empty( $fields ) ){
                    foreach ( $fields as $id => $field ){
                        $_field = array();
                        if( $field instanceof  CF_Translate_Field ){
                            $_field = $field->to_array( false );
                        }

                        $data[ 'form' ][ 'fields' ][ $language ][ $id ] = $_field;
                    }
                }


            }

		}

		return $data;
	}

	/**
	 * Get prepared form info
	 *
	 * @since 0.1.0
	 *
	 * @return array
	 */
	protected function form_info(){
		return array(
			'name' => $this->form[ 'name' ]
		);
	}

	/**
	 * Get prepared strings for UI
	 *
	 * @since 0.1.0
	 *
	 * @return array
	 */
	protected function strings(){
		return array(
			'bad_language'         => __( 'Could not add language, please check that it is supported.', 'caldera-forms-translation' ),
			'translations_saved'   => __( 'Translations Saved :)', 'caldera-forms-translation' ),
			'save_error'           => __( 'Not Saved :(', 'caldera-forms-translation' ),
			'unsaved_translations' => __( 'You Have Unsaved Translations!', 'caldera-forms-translation' ),
			'unsaved_settings'     => __( 'You Have Unsaved Settings!', 'caldera-forms-translation' ),
		);
	}

	/**
	 * Get other info for UI
	 *
	 * @since 0.1.0
	 *
	 * @return array
	 */
	protected function data(){
		return array(
			'nonce' => CF_Translate_AdminForm:: nonce(),
			'api' => esc_url_raw( admin_url( 'admin-ajax.php' ) )
		);
	}

}