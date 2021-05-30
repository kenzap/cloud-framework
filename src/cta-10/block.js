import './style.scss';
import './editor.scss';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText, InnerBlocks } = wp.editor;
import { blockProps, ContainerSave, uo } from '../commonComponents/container/container';
import { getTypography } from '../commonComponents/typography/typography';
import Edit from './edit';

/**
 * Sanitize html attribute value
 * @param {string} value - for field
 */
export const sanitizeAttr = ( value ) => {
    
    value = value.replace(/&/g, "&amp;")
         .replace(/</g, "&lt;")
         .replace(/>/g, "&gt;")
         .replace(/"/g, "&quot;")
         .replace(/'/g, "&#039;");

    return value;
};
/**
 * Provides the initial data for new block
 */
export const defaultItem = {
    title: __( 'Help and <br> Documentation', 'kenzap-cta' ),
    description: __( 'Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.', 'kenzap-cta' ),
    alt: 'image',
    link: '#',
    linkn: false,
    btn: 'Get Details',
    color: '#fff',
    color2: '#333',
    img1: uo(window.kenzap_cta_path + "images/info-img-6-1.png"),
};

export const defaultSubBlocks = JSON.stringify( [
    {
        title: __( 'Help and <br> Documentation', 'kenzap-cta' ),
        description: __( 'Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.', 'kenzap-cta' ),
        alt: 'image',
        link: '#',
        linkn: false,
        btn: 'Get Details',
        color: '#fff',
        color2: '#333',
        img1: uo(window.kenzap_cta_path + "images/info-img-6-1.png"),
        key: new Date().getTime() + 1,
    }, {
        title: __( 'The Freedom we Strive for', 'kenzap-cta' ),
        description: __( 'Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.', 'kenzap-cta' ),
        alt: 'image',
        link: '#',
        linkn: false,
        btn: 'Get Details',
        color: '#fff',
        color2: '#333',
        img1: uo(window.kenzap_cta_path + "images/info-img-6-2.png"),
        key: new Date().getTime() + 2,
    }, {
        title: __( 'Developer <br>and Resources', 'kenzap-cta' ),
        description: __( 'Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.', 'kenzap-cta' ),
        alt: 'image',
        link: '#',
        linkn: false,
        btn: 'Get Details',
        color: '#fff',
        color2: '#333',
        img1: uo(window.kenzap_cta_path + "images/info-img-6-3.png"),
        key: new Date().getTime() + 2,
    }
] );

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
        '--textColor2': `${ attributes.textColor2 }`,
    };

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
        'font-weight': 7,
        'line-height': 40,
        'margin-bottom': 15,
        'color': '#23282d'
    },
    {
        'title': __( '- Description', 'kenzap-cta' ),
        'font-size': 15,
        'font-weight': 4,
        'line-height': 24,
        'margin-bottom': 20,
        'color': '#23282d'
    },
    {
        'title': __( '- Button', 'kenzap-cta' ),
        'type': 'button',
        'font-size': 16,
        'font-weight': 4,
        'line-height': 30,
        'margin-top': 20,

        'padding-top': 12,
        'padding-right': 48,
        'padding-bottom': 12,
        'padding-left': 48,
        'border-radius': 4,

        'color': '#ffffff',
        'background-color': '#23282d',
        'hover-color': '#23282d',
        'hover-background-color': '#ffffff'
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
registerBlockType( 'kenzap/cta-10', {
    title: __( 'CTA Tables', 'kenzap-cta' ),
    icon: 'migrate',
    category: 'layout',
    keywords: [
        __( 'kenzap cta 10', 'kenzap-cta' ),
        __( 'Call to action', 'kenzap-cta' ),
        __( 'Columns Tables', 'kenzap-cta' ),
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

        elements: {
            type: 'number',
            default: 3,
        },

        textColor2: {
            type: 'string',
            //default: '#fff',
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

        randomValue: {
            type: 'string'
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

        if ( props.attributes.preview ) return ( <img src={ `${ window.kenzap_cta_path + 'cta-10/preview.jpeg' }` } /> );

        if ( props.attributes.items.length === 0 && props.attributes.isFirstLoad ) {
            props.setAttributes( {
                textColor2: "#fff",
                items: [ ...JSON.parse( defaultSubBlocks ) ],
                isFirstLoad: false,
            } );

            props.attributes.items = JSON.parse( defaultSubBlocks );
            if ( ! props.attributes.blockUniqId ) {
                props.setAttributes( {
                    blockUniqId: new Date().getTime(),
                } );
            }
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
                    className={ `kpinf6 ${ attributes.topOffset > 0 ? 'topOffset': '' } block-${ attributes.blockUniqId }` }
                    attributes={ attributes }
                    style={ vars }
                    withBackground
                    withPadding
                    >

                    <div className="kenzap-container" style={ kenzapContanerStyles }>
                        { attributes.nestedBlocks == 'top' && <InnerBlocks.Content /> }
                        <div class="kenzap-row">

                            { attributes.items && attributes.items.map( ( item, index ) => (
                                
                                <div class="kenzap-col-4">
                                    <div class="info-box">
                                        { item.img1!='none' && <div class="kp-img">
                                            <img src={ uo(item.img1) } alt={  sanitizeAttr(item.alt) } />
                                        </div> }

                                        <div class="kp-content">
                                            <RichText.Content
                                                tagName="h3"
                                                className="kp-h3"
                                                value={ item.title }
                                                style={ getTypography( attributes, 0 ) }
                                                />

                                            <RichText.Content
                                                tagName="p"
                                                className="kp-p"
                                                value={ item.description }
                                                style={ getTypography( attributes, 1 ) }
                                                />

                                            { item.btn && <a 
                                                target={ item.linkn ? '_blank':'_self' }
                                                className="bt1"
                                                style={ getTypography( attributes, 2 ) }
                                                rel="noopener noreferrer"
                                                href={ item.link } >{ item.btn }</a> 
                                            }

                                        </div>
                                    </div>
                                </div>
                            ) ) }
                            
                        </div>    
                        { attributes.nestedBlocks == 'bottom' && <InnerBlocks.Content /> } 
                    </div>
                </ContainerSave>
            </div>
        );
    },
} );
