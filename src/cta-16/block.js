import './style.scss';
import './editor.scss';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText, InnerBlocks } = wp.editor;
import { blockProps, ContainerSave, uo} from '../commonComponents/container/container';
import { getTypography } from '../commonComponents/typography/typography';
import { sanitizeAttr, hexToRGB } from '../commonComponents/helpers/helpers';
import Edit from './edit';


export const defaultSubBlocks = JSON.stringify( [
    {
        title: __( 'United States (New York)', 'kenzap-cta' ),
        address: __( '3697 Bell Street, New York<br>NY 10018', 'kenzap-cta' ),
        img1: (window.kenzap_cta_path + "images/office-img-1.jpg"),
        alt1: __( 'image', 'kenzap-cta' ),
        key: new Date().getTime() + 1,
    }, {
        title: __( 'United States (Chicago)', 'kenzap-cta' ),
        address: __( '3825 Millbrook Road, West Chicago <br>IL 601858', 'kenzap-cta' ),
        img1: (window.kenzap_cta_path + "images/office-img-2.jpg"),
        alt1: __( 'image', 'kenzap-cta' ),
        key: new Date().getTime() + 2,
    }, {
        title: __( 'France (Paris)', 'kenzap-cta' ),
        address: __( '70 rue Marie de Medicis, BEZIERS <br>Languedoc-Roussillon 34500', 'kenzap-cta' ),
        img1: (window.kenzap_cta_path + "images/office-img-3.jpg"),
        alt1: __( 'image', 'kenzap-cta' ),
        key: new Date().getTime() + 2,
    }, {
        title: __( 'Singapore (Singapore)', 'kenzap-cta' ),
        address: __( '260 Orchard Road, The Heeren, 04-30/31 238855 <br>Singapore 238855', 'kenzap-cta' ),
        img1: (window.kenzap_cta_path + "images/office-img-4.jpg"),
        alt1: __( 'image', 'kenzap-cta' ),
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
        '--textColor2': `${ hexToRGB(attributes.textColor2, attributes.opacity/100) }`,
        '--textColor3': `${ hexToRGB(attributes.textColor3, attributes.opacity/100) }`,
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
        'title': __( '- Title', 'kenzap-cta' ),
        'type': 'title',
        'font-size': 20,
        'font-size-t': 20,
        'font-size-m': 20,
        'font-weight': 7,
        'line-height': 20,
        'margin-bottom': 8,
        'color': '#ffffff',
    },
    {
        'title': __( '- Address', 'kenzap-cta' ),
        'font-size': 15,
        'font-weight': 4,
        'line-height': 24,
        'margin-bottom': 0,
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
registerBlockType( 'kenzap/cta-16', {
    title: __( 'Office Contacts', 'kenzap-cta' ),
    icon: 'migrate',
    category: 'layout',
    keywords: [
        __( 'kenzap cta 16', 'kenzap-cta' ),
        __( 'Contacts, office locations, boxes', 'kenzap-cta' ),
        __( 'Cities, address', 'kenzap-cta' ),
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

        titleSize: {
            type: 'number',
            default: 15,
        },

        borderRadius: {
            type: 'number',
            default: 3,
        },

        textThickness: {
            type: 'number',
            default: 4,
        },

        openFirst: {
            type: 'boolean',
            default: true,
        },

        textColor2: {
            type: 'string',
            default: '#23282d',
        },

        textColor3: {
            type: 'string',
            default: '#007cba',
        },

        elements: {
            type: 'number',
            default: 4,
        },

        opacity: {
            type: 'number',
            default: 80,
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

        if ( props.attributes.preview ) return ( <img src={ `${ window.kenzap_cta_path + 'cta-16/preview.jpeg' }` } /> );
        
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
                    className={ `kpcoff block-${ attributes.blockUniqId }` }
                    attributes={ attributes }
                    style={ vars }
                    withBackground
                    withPadding
                    >

                    <div className="kenzap-container" style={ kenzapContanerStyles }>
                        { attributes.nestedBlocks == 'top' && <InnerBlocks.Content /> }
                        <div class="kenzap-row">

                            { attributes.items && attributes.items.map( ( item, index ) => (

                            <div class="kenzap-col-6">
                                <div class="contact-box">
                                    <div class="kp-img">
                                        { item.img1!='none' && <img src={ (item.img1) } alt={ sanitizeAttr(item.alt1) } /> }
                                    </div>
                                    <div class="kp-content">
                                        <div class="kp-a" >
                                            <div>
                                                <RichText.Content
                                                    tagName="div"
                                                    className="kp-addr"
                                                    value={ item.title }
                                                    style={ getTypography( attributes, 0 ) }
                                                    />
                                                <RichText.Content
                                                    tagName="address"
                                                    className="kp-addr"
                                                    value={ item.address }
                                                    style={ getTypography( attributes, 1 ) }
                                                    />
                                            </div>
                                        </div>
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
