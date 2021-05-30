import './style.scss';
import './editor.scss';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText, InnerBlocks } = wp.editor;
import { blockProps, ContainerSave, uo } from '../commonComponents/container/container';
import { getTypography } from '../commonComponents/typography/typography';
import { sanitizeAttr, hexToRGB } from '../commonComponents/helpers/helpers';
import Edit from './edit';


export const defaultSubBlocks = JSON.stringify( [
    {
        title: __( 'Jacob Hicks', 'kenzap-cta' ),
        img1: uo(window.kenzap_cta_path + "images/contact-img-1.jpg"),
        alt1: __( 'image', 'kenzap-cta' ),
        phone: __( '<a href="tel:+1917888999">+1 (917) 888999</a>', 'kenzap-cta' ),
        email: __( '<a href="emailto:jakob@kenzap.com">jakob@kenzap.com</a>', 'kenzap-cta' ),
        key: new Date().getTime() + 1,
    }, {
        title: __( 'Jeremy Burke', 'kenzap-cta' ),
        img1: uo(window.kenzap_cta_path + "images/contact-img-2.jpg"),
        alt1: __( 'image', 'kenzap-cta' ),
        phone: __( '<a href="tel:+1917888999">+1 (917) 888999</a>', 'kenzap-cta' ),
        email: __( '<a href="emailto:jeremy@kenzap.com">jeremy@kenzap.com</a>', 'kenzap-cta' ),
        key: new Date().getTime() + 2,
    }, {
        title: __( 'Mary Adams', 'kenzap-cta' ),
        img1: uo(window.kenzap_cta_path + "images/contact-img-3.jpg"),
        alt1: __( 'image', 'kenzap-cta' ),
        phone: __( '<a href="tel:+1917888999">+1 (917) 888999</a>', 'kenzap-cta' ),
        email: __( '<a href="emailto:mary@kenzap.com">mary@kenzap.com</a>', 'kenzap-cta' ),
        key: new Date().getTime() + 2,
    }, {
        title: __( 'Mildred Alexander', 'kenzap-cta' ),
        img1: uo(window.kenzap_cta_path + "images/contact-img-4.jpg"),
        alt1: __( 'image', 'kenzap-cta' ),
        phone: __( '<a href="tel:+1917888999">+1 (917) 888999</a>', 'kenzap-cta' ),
        email: __( '<a href="emailto:mild.alex@kenzap.com">mild.alex@kenzap.com</a>', 'kenzap-cta' ),
        key: new Date().getTime() + 2,
    }, {
        title: __( 'Roger Bates', 'kenzap-cta' ),
        img1: uo(window.kenzap_cta_path + "images/contact-img-5.jpg"),
        alt1: __( 'image', 'kenzap-cta' ),
        phone: __( '<a href="tel:+1917888999">+1 (917) 888999</a>', 'kenzap-cta' ),
        email: __( '<a href="emailto:roger@kenzap.com">roger@kenzap.com</a>', 'kenzap-cta' ),
        key: new Date().getTime() + 2,
    }, {
        title: __( 'Jesse Chavez', 'kenzap-cta' ),
        img1: uo(window.kenzap_cta_path + "images/contact-img-6.jpg"),
        alt1: __( 'image', 'kenzap-cta' ),
        phone: __( '<a href="tel:+1917888999">+1 (917) 888999</a>', 'kenzap-cta' ),
        email: __( '<a href="emailto:jesse@kenzap.com">jesse@kenzap.com</a>', 'kenzap-cta' ),
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
        '--textColor': `${ attributes.textColor }`,
        '--textColor2': `${ hexToRGB(attributes.textColor2, attributes.opacity/100) }`,
        '--textColor3': `${ hexToRGB(attributes.textColor3, attributes.opacity/100) }`,
        '--textColor4': `${ attributes.textColor4 }`,
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
        'title': __( '- Name', 'kenzap-cta' ),
        'font-size': 18,
        'font-weight': 6,
        'line-height': 18,
        'margin-bottom': 15,
        'color': '-',
    },
    {
        'title': __( '- Number', 'kenzap-cta' ),
        'font-size': 20,
        'font-weight': 4,
        'line-height': 20,
        'margin-bottom': 0,
        'color': '-'
    },
    {
        'title': __( '- Email', 'kenzap-cta' ),
        'font-size': 16,
        'font-weight': 6,
        'line-height': 16,
        'margin-bottom': 0,
        'color': '-'
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
registerBlockType( 'kenzap/cta-17', {
    title: __( 'Contacts with Faces', 'kenzap-cta' ),
    icon: 'migrate',
    category: 'layout',
    keywords: [
        __( 'Employees, social networks', 'kenzap-cta' ),
        __( 'team members contacts', 'kenzap-cta' ),
        __( 'kenzap cta 17', 'kenzap-cta' ),
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

        imgSize: {
            type: 'number',
            default: 90,
        },

        borderRadius: {
            type: 'number',
            default: 2,
        },

        openFirst: {
            type: 'boolean',
            default: true,
        },

        textColor: {
            type: 'string',
            default: '#23282d',
        },

        textColor2: {
            type: 'string',
            default: '#6b6b6b',
        },

        textColor3: {
            type: 'string',
            default: '#007cba',
        },

        textColor4: {
            type: 'string',
            default: '#007cba',
        },

        elements: {
            type: 'number',
            default: 6,
        },

        items: {
            type: 'array',
            default: [],
        },

        typography: {
            type: 'array',
            default: [],
        },

        opacity: {
            type: 'number',
            default: 80,
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

        if ( props.attributes.preview ) return ( <img src={ `${ window.kenzap_cta_path + 'cta-17/preview.jpeg' }` } /> );

        if ( props.attributes.items.length === 0 && props.attributes.isFirstLoad ) {
            props.setAttributes( {
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
        
        if(props.attributes.isFirstLoad){

            this.props.setAttributes( { backgroundColor: '#fff' } );
            this.props.setAttributes( { isFirstLoad: false } );
        }

        return (
            <div id={ attributes.anchor } className={ className ? className : '' } style={ vars }>
                <ContainerSave
                    className={ `kp-team block-${ attributes.blockUniqId }` }
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
                                    <div class="kp-box">
                                        <div class="kp-img" style={ { width: attributes.imgSize } }>
                                            { item.img1!='none' && <img src={ uo(item.img1) } style={ { width: attributes.imgSize } } alt={ sanitizeAttr(item.alt1) } /> }
                                        </div>
                                        <div class="kp-content">
                                            <RichText.Content
                                                tagName="h3"
                                                className="kp-h3"
                                                value={ item.title }
                                                style={ getTypography( attributes, 0 ) }
                                                />

                                            <ul>
                                                { item.phone && <li class="phone"> <RichText.Content
                                                 tagName="div"
                                                 className="kp-ap"
                                                 value={ item.phone }
                                                 style={ getTypography( attributes, 1 ) }
                                                 /> </li> }

                                                { item.email && <li class="email"> <RichText.Content
                                                 tagName="div"
                                                 className="kp-ae"
                                                 value={ item.email }
                                                 style={ getTypography( attributes, 2 ) }
                                                 /> </li> }

                                            </ul>
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
