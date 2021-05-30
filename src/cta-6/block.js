import './style.scss';
import './editor.scss';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText, InnerBlocks } = wp.editor;
import { blockProps, ContainerSave, uo } from '../commonComponents/container/container';
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
        '--textThickness': `${ parseInt(attributes.textThickness) * 100 }`,
        '--borderRadius': `${ attributes.borderRadius }px`,
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
        'title': __( '- Note', 'kenzap-cta' ),
        'font-size': 14,
        'font-weight': 4,
        'letter-spacing': 123,
        'line-height': 18,
        'margin-bottom': 10,
        'color': '007cba'
    },
    {
        'title': __( '- Title', 'kenzap-cta' ),
        'font-size': 100,
        'font-weight': 7,
        'line-height': 100,
        'margin-bottom': 40,
        'color': '#333333'
    },
    {
        'title': __( '- Description', 'kenzap-cta' ),
        'font-size': 15,
        'font-weight': 4,
        'line-height': 24,
        'margin-bottom': 20,
        'color': '#333333'
    },
    {
        'title': __( '- CTA', 'kenzap-cta' ),
        'type': 'button',
        'font-size': 15,
        'font-weight': 4,
        'line-height': 15,
        'margin-top': 30,
        'padding-bottom': 20,
        'color': '007cba',
        'border-color': '007cba',
        'hover-color': '#333333',
        'hover-border-color': '#333333'
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
registerBlockType( 'kenzap/cta-6', {
    title: __( 'Badged Banner', 'kenzap-cta' ),
    icon: 'migrate',
    category: 'layout',
    keywords: [
        __( 'kenzap cta 6', 'kenzap-cta' ),
        __( 'Call to action', 'kenzap-cta' ),
        __( 'Banner, image, badge', 'kenzap-cta' ),
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
        
        pretitle: {
            type: 'string',
            default: __( 'DO NOT MISS THIS', 'kenzap-cta' ),
        },

        title: {
            type: 'string',
            default: __( 'choco  muffins', 'kenzap-cta' ),
        },

        description: {
            type: 'string',
            default: __( 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.', 'kenzap-cta' ),
        },

        btnText: {
            type: 'string',
            default: __( 'GET NOW $123', 'kenzap-cta' ),
        },

        textThickness: {
            type: 'number',
            default: 7,
        },

        borderRadius: {
            type: 'number',
            default: 0,
        },

        link: {
            type: 'string',
            default: '#',
        },

        linkNew: {
            type: 'boolean',
            default: false,
        },

        ctaImage: {
            type: 'string',
            default: (window.kenzap_cta_path + "images/cta-img-6.jpg"),
        },
    
        ctaImageId: {
            type: 'string',
            default: '',
        },

        badgeImage: {
            type: 'string',
            default: (window.kenzap_cta_path + "images/cta-stamp.png"),
        },
    
        bagdeImageId: {
            type: 'string',
            default: '',
        },

        textColor: {
            type: 'string',
            default: '#333',
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

        if ( props.attributes.preview ) return ( <img src={ `${ window.kenzap_cta_path + 'cta-6/preview.jpeg' }` } /> );

        if(props.attributes.isFirstLoad){

            props.setAttributes( { backgroundColor: '#111111', containerMaxWidth: '2000' } );
            props.setAttributes( { isFirstLoad: false } );
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
                    className={ `kpcta7 block-${ attributes.blockUniqId }` }
                    attributes={ attributes }
                    style={ vars }
                    withBackground
                    withPadding
                    >

                    <div className="kenzap-container" style={ kenzapContanerStyles }>
                        { attributes.nestedBlocks == 'top' && <InnerBlocks.Content /> }
                        <div class="kenzap-row">
                            <div class="kenzap-col-6">
                                <div 
                                    class="kp-img"
                                    style={ {
                                        backgroundImage: attributes.ctaImage=='none' ? 'none':`url('${ (attributes.ctaImage) }')`
                                    } }
                                
                                ></div>
                            </div>
                            <div class="kenzap-col-6">
                                <div class="kp-content" style={ { borderWidth: attributes.textThickness } }>
                                    <div class="cta-stamp">
                                        { attributes.badgeImage != 'none'  && <img 
                                            src={ (attributes.badgeImage) } alt={ __( 'Title', 'kenzap-cta' ) }
                                            /> }
                                    </div>

                                    { attributes.pretitle &&  <RichText.Content
                                        tagName="span"
                                        className="kp-sp"
                                        value={ attributes.pretitle }
                                        style={ getTypography( attributes, 0 ) }
                                    /> }
                            
                                    { attributes.title &&  <RichText.Content
                                        tagName="h2"
                                        className="kp-h2"
                                        value={ attributes.title }
                                        style={ getTypography( attributes, 1 ) }
                                    /> }
                            
                                    { attributes.description &&  <RichText.Content
                                        tagName="h2"
                                        className="kp-p"
                                        value={ attributes.description }
                                        style={ getTypography( attributes, 2 ) }
                                    /> }
                            
                                    { attributes.btnText &&  <a 
                                        className="cta-btn-1"
                                        style={ getTypography( attributes, 3 ) }
                                        rel="noopener noreferrer"
                                        target={ attributes.linkNew ? '_blank':'_self' }
                                        href={ attributes.link } >{ attributes.btnText } 
                                    </a> }
                                </div>
                            </div>
                        </div>        
                        { attributes.nestedBlocks == 'bottom' && <InnerBlocks.Content /> }
                    </div>
                </ContainerSave>
            </div>
        );
    },
} );
