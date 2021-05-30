import './style.scss';
import './editor.scss';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText, InnerBlocks } = wp.editor;
import { blockProps, ContainerSave, uo } from '../commonComponents/container/container';
import { getTypography } from '../commonComponents/typography/typography';
import Edit from './edit';

export const defaultSocIcons = JSON.stringify( [
    {
        title: __( 'Twitter', 'kenzap-plugin' ),
        img1: (window.kenzap_cta_path + "images/facebook-icon.svg"),
        link: "#",
        alt1: __( 'image', 'kenzap-plugin' ),
        key: new Date().getTime() + 1,
    }, {
        title: __( 'Facebook', 'kenzap-plugin' ),
        img1: (window.kenzap_cta_path + "images/google-icon.svg"),
        link: "#",
        alt1: __( 'image', 'kenzap-plugin' ),
        key: new Date().getTime() + 2,
    }, {
        title: __( 'Instagram', 'kenzap-plugin' ),
        img1: (window.kenzap_cta_path + "images/twitter-icon.svg"),
        link: "#",
        alt1: __( 'image', 'kenzap-plugin' ),
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
        '--iconlSize': `${ attributes.iconlSize }px`,
    };

    if ( attributes.backgroundColor ) { vars["--backgroundColor"] = attributes.backgroundColor; }
    if ( attributes.linkl1icon != 'none' ) { vars["--linkl1icon"] = `url('${ (attributes.linkl1icon) }')`; }else{ vars["--linkl1icon"] = `unset`; }
    if ( attributes.linkl2icon != 'none' ) { vars["--linkl2icon"] = `url('${ (attributes.linkl2icon) }')`; }else{ vars["--linkl2icon"] = `unset`; }
    
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
        'title': __( '- Left pane', 'kenzap-plugin' ),
        'font-size': 12,
        'font-weight': 4,
        'line-height': 12,
        'margin-top': 0,
        'margin-bottom': 0,
        'padding-top': 5,
        'padding-bottom': 5,
        'color': '#ffffff',
        'text-align': '-',
    },
    {
        'title': __( '- Right pane', 'kenzap-plugin' ),
        'font-size': 12,
        'font-weight': 4,
        'line-height': 12,
        'margin-top': 0,
        'margin-bottom': 0,
        'padding-top': 7,
        'padding-bottom': 7,
        'text-align': '-',
        'color': '#ffffff',
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
registerBlockType( 'kenzap/cta-69', {
    title: __( 'Navigation Bar', 'kenzap-plugin' ),
    icon: 'migrate',
    category: 'layout',
    keywords: [
        __( 'topbar menu tagline', 'kenzap-plugin' ),
        __( 'kenzap cta 69', 'kenzap-plugin' ),
        __( 'top bar navigation, social icons, header', 'kenzap-plugin' ),
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

        leftPane: {
            type: 'string',
            default: 'contacts',
        },

        note: {
            type: 'string',
            default: '',
        },

        paneVisible: {
            type: 'string',
            default: 'kprp',
        },

        logo: {
            type: 'string',
            default: 'none',
        },

        logoSize: {
            type: 'number',
            default: 40,
        },

        logoSizem: {
            type: 'number',
            default: 40,
        },

        logoLink: {
            type: 'string',
            default: '/',
        },

        iconlSize: {
            type: 'number',
            default: 12,
        },

        iconlSizeSoc: {
            type: 'number',
            default: 30,
        },

        customIconColor: {
            type: 'boolean',
            default: false,
        },
        
        linkl1icon:{
            type: 'string',
            default: (window.kenzap_cta_path + "images/bar-phone-icon.svg"),
        },

        linkl1Txt: {
            type: 'string',
            default: '+1 (322) 233-3243-434',
        },

        linkl1: {
            type: 'string',
            default: 'tel:+1322233324343',
        },

        linkl2icon: {
            type: 'string',
            default: (window.kenzap_cta_path + "images/bar-mail-icon.svg"),
        },

        linkl2Txt: {
            type: 'string',
            default: 'info@example.com',
        },

        linkl2: {
            type: 'string',
            default: 'mailto:info@example.com',
        },

        rightPane: {
            type: 'string',
            default: 'links',
        },

        linkr1Txt: {
            type: 'string',
            default: 'SIGN IN',
        },

        linkr1: {
            type: 'string',
            default: '#',
        },

        linkr2Txt: {
            type: 'string',
            default: 'SIGN UP',
        },

        linkr2: {
            type: 'string',
            default: '#',
        },

        //search
        action: {
            type: 'string',
            default: '/search-results/',
        },

        //social icons
        elements: {
            type: 'number',
            default: 3,
        },

        //links
        linkDivider: {
            type: 'string',
            //default: false,
        },

        linkElements: {
            type: 'number',
            default: 2,
        },

        linkItems: {
            type: 'array',
            default: [],
        },

        items: {
            type: 'array',
            default: [],
        },

        textColor2: {
            type: 'string',
        },

        img1: {
            type: 'string',
            default: (window.kenzap_cta_path + "images/bar-phone-icon.svg"),
        },

        alt1: {
            type: 'string',
            default: 'image',
        },

        img2: {
            type: 'string',
            default: (window.kenzap_cta_path + "images/bar-mail-icon.svg"),
        },

        alt2: {
            type: 'string',
            default: 'image',
        },

        searchIcon: {
            type: 'string',
            default: (window.kenzap_cta_path + "images/search-icon.svg"),
        },

        searchText: {
            type: 'string',
            default: "search...",
        },


        isFirstLoad: {
            type: 'boolean',
            default: true,
        },

        blockUniqId: {
            type: 'number',
            default: 0,
        },

        typography: {
            type: 'array',
            default: [],
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

        if ( props.attributes.preview ) return ( <img src={ `${ window.kenzap_cta_path + 'cta-69/preview.jpeg' }` } /> );
 
        if ( props.attributes.isFirstLoad ){ props.setAttributes( { isFirstLoad: false, textColor2: '#ffffff', backgroundColor: '#23282d', containerPadding: 0, items: [ ...JSON.parse( defaultSocIcons ) ] } ); }

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
                    className={ `kp-tph-1 block-${ attributes.blockUniqId } ${ attributes.paneVisible }` }
                    attributes={ attributes }
                    style={ vars }
                    withBackground
                    withPadding
                    >

                    <div className="kenzap-container" style={ kenzapContanerStyles }>
                        { attributes.nestedBlocks == 'top' && <InnerBlocks.Content /> }
              
                        <div class="kp-content">

                            { attributes.leftPane == 'logo' && attributes.logo &&
                                <div class="lpane logo">
                                    <a href={ attributes.logoLink }>
                                        { attributes.logo !== 'none' && <img style={{ width: 'auto', height: attributes.logoSize+'px', '--lgsm': attributes.logoSizem+'px' }} src={ attributes.logo } alt="logo"/> }
                                    </a>
                                </div>
                            }

                            { attributes.leftPane == 'contacts' &&
                                <div class="lpane link-1">
                                    <ul>
                                        <li>
                                            <a href={ attributes.linkl1 } style={ getTypography( attributes, 0 ) }>
                                                { attributes.customIconColor && <i class="linkl1-icon"></i> }
                                                { !attributes.customIconColor && attributes.linkl1icon !== 'none' && <img src={ (attributes.linkl1icon) } alt="image"/> }
                                                { attributes.linkl1Txt }
                                            </a>
                                        </li>
                                        <li>
                                            <a href={ attributes.linkl2 } style={ getTypography( attributes, 0 ) }> 
                                                { attributes.customIconColor && <i class="linkl2-icon"></i> }
                                                { !attributes.customIconColor && attributes.linkl2icon !== 'none' && <img src={ (attributes.linkl2icon) } alt="image"/> }
                                                { attributes.linkl2Txt }
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            }

                            { attributes.rightPane == 'links' &&
                                <div class={ `rpane link-normal ${ attributes.linkDivider?"linkd":"" }` } style={ { "--lcl":attributes.linkDivider } }>
                                    <ul>
                                        { attributes.items && attributes.items.map( ( item, index ) => ( 
                                            <li>
                                                <a target="_blank" rel="noopener noreferrer" style={ {...getTypography( attributes, 1 ) } } href={ item.link }>{ item.text }</a>
                                            </li>
                                        ) ) }
                                    </ul>
                                </div>
                            }

                            { attributes.rightPane == 'search' &&
                                <div class="rpane search">
                                    <form action={ attributes.action } >
                                        <input name="q" type="text" style={ {...getTypography( attributes, 1 ), ...getTypography( attributes, 1, "--color" ) } } placeholder={ attributes.searchText } />
                                        <button type="submit">
                                            <img src={ (attributes.searchIcon) } alt="search image" />
                                        </button>
                                    </form>
                                </div>
                            }

                            { attributes.rightPane == 'icons' &&
                                <div class="rpane link-social">
                                    <ul>
                                        { attributes.items && attributes.items.map( ( item, index ) => ( 
                                            <li>
                                                <a target="_blank" rel="noopener noreferrer" href={ item.link }><img style={ {...getTypography( attributes, 1 ), height: attributes.iconlSizeSoc + "px" } } src={ (item.img1) } /></a>
                                            </li>
                                        ) ) }
                                    </ul>
                                </div>
                            }

                            { attributes.rightPane == 'note' && 

                                <RichText.Content
                                    tagName="div"
                                    className="kpn"
                                    value={ attributes.note }
                                    style={ getTypography( attributes, 1 ) }
                                />
                            }
                        </div>

                        { attributes.nestedBlocks == 'bottom' && <InnerBlocks.Content /> }
                    </div>

                </ContainerSave>
            </div>
        );
    },
} );
