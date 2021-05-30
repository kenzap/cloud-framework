import './style.scss';
import './editor.scss';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { InnerBlocks } = wp.editor;
import { blockProps, ContainerSave } from '../commonComponents/container/container';
import { getTypography } from '../commonComponents/typography/typography';
import Edit from './edit';

/**
 * Generate inline styles for custom settings of the block
 * @param {Object} attributes - of the block
 * @returns {Node} generated styles
 */
export const getStyles = attributes => {
    const kenzapContanerStyles = {
        maxWidth: `${ attributes.containerMaxWidth === '100%' ? '100%' : attributes.containerMaxWidth + 'px' }`,
        '--maxWidth': `${ attributes.containerMaxWidth === '100%' ? '100wh' : attributes.containerMaxWidth + ' ' } `,
    };

    const vars = {
        '--paddings': `${ attributes.containerPadding }`,
        '--paddings2': `${ attributes.containerSidePadding }px`,
         '--textColor': `${ attributes.textColor }`,
    };

    if ( attributes.ctaImage != 'none' ) { vars["--ctaImage"] = `url('${ (attributes.ctaImage) }')`; }else{ vars["--ctaImage"] = `unset`; }
    if ( attributes.backgroundColor ) { vars["--backgroundColor"] = attributes.backgroundColor; }
    
    return {
        vars,
        kenzapContanerStyles,
    };
};

/**
 * Define typography defaults
 */
export const typographyArr = JSON.stringify([
    {
        'title': __( '- Title', 'kenzap-cta' ),
        'font-size': 18,
        'font-weight': 4,
        'line-height': 21,
        'padding-top': 60,
        'padding-right': 60,
        'padding-bottom': 60,
        'padding-left': 60,
        'color': '#ffffff'
    },
]);

/**
 * Register: a Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
registerBlockType( 'kenzap/cta-5', {
    title: __( 'Phone Call Strip', 'kenzap-cta' ),
    icon: 'migrate',
    category: 'layout',
    keywords: [
        __( 'kenzap cta 5', 'kenzap-cta' ),
        __( 'call to action phone', 'kenzap-cta' ),
        __( 'Banner', 'kenzap-cta' ),
    ],
    html: true,
    supports: {
        align: [ 'full', 'wide' ],
        anchor: true,
    },
    attributes: {
        ...blockProps,

        align: {
            type: 'string',
            default: 'full',
        },

        btnText: {
            type: 'string',
            default: __( 'Request a callback now!', 'kenzap-cta' ),
        },

        iconSize: {
            type: 'number',
            default: 19,
        },

        link: {
            type: 'string',
            default: 'tel:+1234567890987',
        },

        linkNew: {
            type: 'boolean',
            default: false,
        },

        ctaImage: {
            type: 'string',
            default: (window.kenzap_cta_path + "images/phone-icon.svg"),
        },
    
        ctaImageId: {
            type: 'string',
            default: '',
        },

        textColor: {
            type: 'string',
            default: '#ffffff',
        },

        items: {
            type: 'array',
            default: [],
        },

        typography: {
            type: 'array',
            default: [],
        },

        isFirstLoad: {
            type: 'boolean',
            default: true,
        },

        blockUniqId: {
            type: 'number',
            default: 0,
        },

        isVisible: {
            type: 'boolean',
            default: false,
        },

        preview: {
            type: 'boolean',
            default: false,
        },
    },

    example: { attributes: { preview: true } },
    /**
     * The edit function describes the structure of your block in the context of the editor.
     * This represents what the editor will render when the block is used.
     *
     * The "edit" property must be a valid function.
     *
     * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
     */
    edit: ( props ) => {

        if ( props.attributes.preview ) return ( <img src={ `${ window.kenzap_cta_path + 'cta-5/preview.jpeg' }` } /> );
      
        if(props.attributes.isFirstLoad){ props.setAttributes( { backgroundColor: '#007cba', isFirstLoad: false} ); }

        return ( <Edit { ...props } /> );
    },

    /**
     * The save function defines the way in which the different attributes should be combined
     * into the final markup, which is then serialized by Gutenberg into post_content.
     *
     * The "save" property must be specified and must be a valid function.
     * @param {Object} props - attributes
     * @returns {Node} rendered component
     */
    save: function( props ) {
        const {
            className,
            attributes,
        } = props;

        const { vars, kenzapContanerStyles } = getStyles( props.attributes );

        return (
            <div id={ attributes.anchor } className={ className ? className : '' } style={ vars }>
                <ContainerSave
                    className={ `kpcta6 block-${ attributes.blockUniqId }` }
                    attributes={ attributes }
                    style={ vars }
                    withBackground
                    withPadding
                    >

                    <div className="kenzap-container" style={ kenzapContanerStyles }>
                        { attributes.nestedBlocks == 'top' && <InnerBlocks.Content /> }
                        <div 
                            class="kp-content"
                            style={ {
                                backgroundColor: attributes.textColor3
                            } }
                            >

                            { attributes.btnText &&  <a 
                                className="cta-btn-1"
                                style={ getTypography( attributes, 0 ) }
                                rel="noopener noreferrer"
                                target={ attributes.linkNew ? '_blank':'_self' }
                                href={ attributes.link } >
                                    <i style={ { width: `${ attributes.iconSize }px`, height: `${ attributes.iconSize }px` } }  class="phone-icon"></i> { attributes.btnText } 
                            </a> }
                        
                        </div>
                        { attributes.nestedBlocks == 'bottom' && <InnerBlocks.Content /> }
                    </div>
                </ContainerSave>
            </div>
        );
    },
} );
