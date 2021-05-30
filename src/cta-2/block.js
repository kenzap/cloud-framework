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
    };

    if ( attributes.ctaImage != 'none' ) { vars["--ctaImage"] = `url('${ uo(attributes.ctaImage) }')`; }else{ vars["--ctaImage"] = `unset`; }
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
        'font-size': 54,
        'font-weight': 7,
        'line-height': 65,
        'padding-bottom': 50,
        'margin-bottom': 50,
        'color': '#23282d'
    },
    {
        'title': __( '- CTA', 'kenzap-cta' ),
        'font-size': 18,
        'font-weight': 7,
        'line-height': 18,
        'color': '#23282d'
    },
    {
        'title': __( '- Number', 'kenzap-cta' ),
        'font-size': 35,
        'font-weight': 7,
        'line-height': 35,
        'margin-top': 10,
        'color': '#23282d'
    },
    {
        'title': __( '- Button', 'kenzap-cta' ),
        'type': 'button',
        'font-weight': 4,
        'line-height': 30,
        'margin-top': 0,

        'font-size': 16,
        'padding-top': 12,
        'padding-right': 48,
        'padding-bottom': 12,
        'padding-left': 48,
        'border-radius': 4,
        'color': '#007cba',
        'background-color': '#23282d',
        'hover-color': '#23282d',
        'hover-background-color': '#007cba'
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
registerBlockType( 'kenzap/cta-2', {
    title: __( 'Phone Call Action Banner', 'kenzap-cta' ),
    icon: 'migrate',
    category: 'layout',
    keywords: [
        __( 'kenzap cta 2', 'kenzap-cta' ),
        __( 'call to action', 'kenzap-cta' ),
        __( 'phone banner', 'kenzap-cta' ),
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
            default: 'wide',
        },

        title: {
            type: 'string',
            default: __( 'Need help to deliver a package to Kenzap?', 'kenzap-cta' ),
        },

        description: {
            type: 'string',
            default: __( 'Call 24 Hours', 'kenzap-cta' ),
        },

        btnText: {
            type: 'string',
            default: __( '(564) 888-6776', 'kenzap-cta' ),
        },

        btnText2: {
            type: 'string',
            default: __( 'Get a quote', 'kenzap-cta' ),
        },

        link: {
            type: 'string',
            default: '#',
        },

        linkNew: {
            type: 'boolean',
            default: false,
        },

        link2: {
            type: 'string',
            default: '#',
        },

        linkNew2: {
            type: 'boolean',
            default: false,
        },

        ctaImage: {
            type: 'string',
            default: uo(window.kenzap_cta_path + "images/phone-icon.svg"),
        },
    
        ctaImageId: {
            type: 'string',
            default: '',
        },

        textColor: {
            type: 'string',
            default: '#23282d',
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

        if ( props.attributes.preview ) return ( <img src={ `${ window.kenzap_cta_path + 'cta-2/preview.jpeg' }` } /> );
      
        if(props.attributes.isFirstLoad){props.setAttributes( { isFirstLoad: false, backgroundColor: '#007cba' } );}

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
                    className={ `kpcta2 block-${ attributes.blockUniqId }` }
                    attributes={ attributes }
                    style={ vars }
                    withBackground
                    withPadding
                    >

                    <div className="kenzap-container" style={ kenzapContanerStyles }>
                        { attributes.nestedBlocks == 'top' && <InnerBlocks.Content /> }
                        <div 
                            class="kp-content" 
                            >
                            { attributes.title &&  <RichText.Content
                                tagName="h2"
                                className="kp-h2"
                                value={ attributes.title }
                                style={ getTypography( attributes, 0 ) }
                            /> }
                            
                            <ul>
                                <li><span class="phone-icon"></span>
                                <RichText.Content
                                    tagName="span"
                                    className="kp-cta"
                                    value={ attributes.description }
                                    style={ getTypography( attributes, 1 ) }
                                />

                                { attributes.btnText &&  <a 
                                    className="phone"
                                    style={ getTypography( attributes, 2 ) }
                                    rel="noopener noreferrer"
                                    target={ attributes.linkNew ? '_blank':'_self' }
                                    href={ attributes.link } >{ attributes.btnText } 
                                </a> }

                                </li>

                                { attributes.btnText2 && 
                                <li>
                                    <a 
                                        className="cta-btn bt1"
                                        style={ getTypography( attributes, 3 ) }
                                        rel="noopener noreferrer"
                                        target={ attributes.linkNew2 ? '_blank':'_self' }
                                        href={ attributes.link2 } >{ attributes.btnText2 } 
                                    </a>
                                </li>
                                }

                            </ul>
                        </div>
                        { attributes.nestedBlocks == 'bottom' && <InnerBlocks.Content /> }
                    </div>
                </ContainerSave>
            </div>
        );
    },
} );
