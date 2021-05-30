import './style.scss';
import './editor.scss';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;InnerBlocks
const { RichText, InnerBlocks } = wp.editor;
import { blockProps, ContainerSave, uo } from '../commonComponents/container/container';
import { getTypography } from '../commonComponents/typography/typography';
import Edit from './edit';


/**
 * Provides the initial data for new block
 */
export const defaultItem = {
    btn: '+1 (965) 555 5555',
    link: 'tel:+10000000',
    linkn: false,
    img1c: true,
    img1: uo(window.kenzap_cta_path + "images/mobile.svg"),
};

export const defaultSubBlocks = JSON.stringify( [
    {
        btn: '+1 (965) 555 5555',
        link: 'tel:+10000000',
        linkn: false,
        img1c: true,
        img1: uo(window.kenzap_cta_path + "images/mobile.svg"),
        key: new Date().getTime() + 1,
    },{
        btn: 'info@kenzap.com',
        link: 'mailto:info@kenzap.com',
        linkn: false,
        img1c: true,
        img1: uo(window.kenzap_cta_path + "images/mail.svg"),
        key: new Date().getTime() + 2,
    }, {
        btn: '7th Avenue at 51st Street',
        link: '#',
        linkn: false,
        img1c: true,
        img1: uo(window.kenzap_cta_path + "images/map.svg"),
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

    if ( attributes.backgroundColor ) { vars["--backgroundColor"] = attributes.backgroundColor; }
    if ( attributes.items[0] ) if ( attributes.items[0].img1 !== 'none' ){ vars["--img1"] = 'url('+ uo(attributes.items[0].img1) +')'; }else{ vars["--img1"] = 'unset'; }
    if ( attributes.items[1] ) if ( attributes.items[1].img1 !== 'none' ){ vars["--img2"] = 'url('+ uo(attributes.items[1].img1) +')'; }else{ vars["--img2"] = 'unset'; }
    if ( attributes.items[2] ) if ( attributes.items[2].img1 !== 'none' ){ vars["--img3"] = 'url('+ uo(attributes.items[2].img1) +')'; }else{ vars["--img3"] = 'unset'; }

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
        'font-weight': 7,
        'line-height': 32,
        'margin-bottom': 30,
        'color': '#ffffff',
    },
    {
        'title': __( '- Contacts', 'kenzap-cta' ),
        'font-size': 16,
        'font-weight': 4,
        'line-height': 30,
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
registerBlockType( 'kenzap/cta-13', {
    title: __( 'Phone Email Address Contacts', 'kenzap-cta' ),
    icon: 'migrate',
    category: 'layout',
    keywords: [
        __( 'kenzap cta 13', 'kenzap-cta' ),
        __( 'Phone, Email, Address', 'kenzap-cta' ),
        __( 'liknks icon banner', 'kenzap-cta' ),
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

        orientation: {
            type: 'string',
            default: 'right',
        },

        elements: {
            type: 'number',
            default: 3,
        },

        title: {
            type: 'title',
            default: __( 'We would be happy to assist you. Just let us know.', 'kenzap-cta' ),
        },

        openFirst: {
            type: 'boolean',
            default: true,
        },

        img1: {
            type: 'string',
            default: uo(window.kenzap_cta_path + "images/cta-img-1.jpg"),
        },

        alt1: {
            type: 'string',
            default: 'image',
        },

        textColor2: {
            type: 'string',
            default: '#007cba',
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

        if ( props.attributes.preview ) return ( <img src={ `${ window.kenzap_cta_path + 'cta-13/preview.jpeg' }` } /> );
        
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

            this.props.setAttributes( { backgroundColor: '#23282d' } );
            this.props.setAttributes( { containerPadding: 55 } );
            this.props.setAttributes( { isFirstLoad: false } );
        }

        return (
            <div id={ attributes.anchor } className={ className ? className : '' } style={ vars }>
                <ContainerSave
                    className={ `kpinf5 block-${ attributes.blockUniqId }` }
                    attributes={ attributes }
                    style={ vars }
                    withBackground
                    withPadding
                    >

                    <div className="kenzap-container" style={ kenzapContanerStyles }>
                        { attributes.nestedBlocks == 'top' && <InnerBlocks.Content /> }
                        <div class="kenzap-row">

                            <div class="kenzap-col-3">
                                <div class="info-box">
                                    <div class="kp-content">
                                    <RichText.Content
                                        tagName="h3"
                                        className="kp-h3"
                                        value={ attributes.title }
                                        style={ getTypography( attributes, 0 ) }
                                        />
                                    </div>
                                </div>
                            </div>

                            { attributes.items && attributes.items.map( ( item, index ) => (
                                    
                                <div class="kenzap-col-3">
                                    <div class="info-box">
                                        <div class="kp-img" >
                                            <div className={ JSON.parse(item.img1c) ? 'mask':'img' }></div>
                                        </div>
                                        <div class="kp-content">
                                            { item.btn && <a 
                                            target={ item.linkn ? '_blank':'_self' }
                                            style={ getTypography( attributes, 1 ) }
                                            rel="noopener noreferrer"
                                            href={ item.link }>{ item.btn }</a> }
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
