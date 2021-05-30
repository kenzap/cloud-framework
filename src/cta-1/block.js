import './style.scss';
import './editor.scss';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText, InnerBlocks } = wp.editor;
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
    };

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
        'font-size': 33,
        'font-weight': 5,
        'line-height': 40,
        'margin-bottom': 20,
        'color': '#ffffff'
    },
    {
        'title': __( '- Description', 'kenzap-cta' ),
        'font-size': 15,
        'font-weight': 4,
        'line-height': 24,
        'margin-bottom': 10,
        'color': '#ffffff'
    },
    {
        'title': __( '- Button', 'kenzap-cta' ),
        'type': 'button',
        'icon': 0,
        'font-weight': 4,
        'line-height': 30,
        'margin-top': 40,

        'font-size': 16,
        'padding-top': 12,
        'padding-right': 48,
        'padding-bottom': 12,
        'padding-left': 48,
        'border-radius': 4,
        'color': '#ffffff',
        'hover-color': '#007cba',
        'hover-background-color': '#ffffff',
        'hover-border-color': '#007cba'
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
registerBlockType( 'kenzap/cta-1', {
    title: __( 'Image & Text Banner', 'kenzap-cta' ),
    icon: 'migrate',
    category: 'layout',
    keywords: [
        __( 'kenzap cta 1', 'kenzap-cta' ),
        __( 'Call to action', 'kenzap-cta' ),
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

        side: {
            type: 'string',
            default: 'left',
        },

        title: {
            type: 'string',
            default: __( 'We were inspired to create amazing and incredible designs.', 'kenzap-cta' ),
        },

        description: {
            type: 'string',
            default: __( 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et dui mattis tortor ultricies aliquam id non sem. Proin vel lorem in dolor fringilla mollis consequat vitae velit. Praesent congue ac arcu vel sodales. Nullam quis faucibus eros. Aliquam at ligula purus. Suspendisse sodales justo sagittis sem vestibulum dapibus.', 'kenzap-cta' ),
        },

        btnText: {
            type: 'string',
            default: __( 'Read More', 'kenzap-cta' ),
        },

        titleSize: {
            type: 'number',
            default: 26,
        },

        descriptionSize: {
            type: 'number',
            default: 15,
        },

        borderRadius: {
            type: 'number',
            default: 0,
        },
        
        textThickness: {
            type: 'number',
            default: 5,
        },

        link: {
            type: 'string',
            default: '#',
        },

        linkNew: {
            type: 'boolean',
            default: false,
        },

        isVisible: {
            type: 'boolean',
            default: false,
        },

        ctaImage: {
            type: 'string',
            default: (window.kenzap_cta_path + "images/cta-img-1.jpg"),
        },
    
        ctaImageId: {
            type: 'string',
            default: '',
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

        if ( props.attributes.preview ) return ( <img src={ `${ window.kenzap_cta_path + 'cta-1/preview.jpeg' }` } /> );
    
        if ( props.attributes.isFirstLoad ) {
            props.setAttributes( { backgroundColor: '#007cba', isFirstLoad: false,} );
        }

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
                    className={ `kpcta1 block-${ attributes.blockUniqId }` }
                    attributes={ attributes }
                    style={ vars }
                    withBackground
                    withPadding
                    >

                    <div className="kenzap-container" style={ kenzapContanerStyles }>
                        { attributes.nestedBlocks == 'top' && <InnerBlocks.Content /> }
                        <div class="kenzap-row">

                            { attributes.side == 'left' &&
                                <div class="kenzap-col-6">
                                    <div class="kp-img" style={ { backgroundImage: attributes.ctaImage !='none' && `url(${ [ (attributes.ctaImage) ] })` } }></div>
                                </div>
                            }
                            <div class="kenzap-col-6">
                                <div 
                                    class={ `kp-content kp-${ attributes.side } `}
                                    style={ getTypography( attributes, 2, "text-align" ) }
                                    >

                                    { attributes.title &&  <RichText.Content
                                        tagName="h2"
                                        className="kp-h2"
                                        value={ attributes.title }
                                        style={ getTypography( attributes, 0 ) }
                                    /> }

                                    { attributes.description &&  <RichText.Content
                                        tagName="p"
                                        className="kp-p"
                                        value={ attributes.description }
                                        style={ getTypography( attributes, 1 ) }
                                    /> }

                                    { attributes.btnText &&  <a 
                                        className="bt2"
                                        style={ getTypography( attributes, 2 ) }
                                        target={ attributes.linkNew ? '_blank':'' }
                                        rel="noopener noreferrer"
                                        href={ attributes.link } >{ attributes.btnText }</a> }
                                </div>
                            </div>
                            { attributes.side == 'right' &&
                                <div class="kenzap-col-6">
                                    <div class="kp-img" style={ { backgroundImage: attributes.ctaImage !='none' && `url(${ [ (attributes.ctaImage) ] })` } }></div>
                                </div>
                            }
                        </div>
                        { attributes.nestedBlocks == 'bottom' && <InnerBlocks.Content /> }
                    </div>
                </ContainerSave>
            </div>
        );
    },
} );
