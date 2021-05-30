import './style.scss';
import './editor.scss';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText, InnerBlocks } = wp.editor;
import { blockProps, ContainerSave, uo } from '../commonComponents/container/container';
import { getTypography } from '../commonComponents/typography/typography';
import Edit from './edit';

/**
 * Provides the initial data for new block
 */
export const defaultItem = {
    title: __( 'Vietnam', 'kenzap-gallery' ),
    description: __( 'Temples of vietnam', 'kenzap-gallery' ),
    iconMediaId: '',
    icon: (window.kenzap_cta_path + 'images/gallery-img-1.jpg'),
    iconF: (window.kenzap_cta_path + 'images/gallery-img-1.jpg'),
    categories: [
        'filter1',
        'filter2',
        'filter3',
    ],
    action: 'enlarge',
    link: '',
    linkTarget: false,
};

export const defaultSubBlocks = JSON.stringify( [
    {
        title: __( 'Vietnam', 'kenzap-gallery' ),
        description: __( 'Art Green Red', 'kenzap-gallery' ),
        iconMediaId: '',
        icon: (window.kenzap_cta_path + 'images/gallery-img-1.jpg'),
        iconF: (window.kenzap_cta_path + 'images/gallery-img-1.jpg'),
        action: 'enlarge',
        link: '',
        linkTarget: false,
        key: new Date().getTime() + 1,
    }, {
        title: __( 'Latvia', 'kenzap-gallery' ),
        description: __( 'Art Green Red White', 'kenzap-gallery' ),
        iconMediaId: '',
        icon: (window.kenzap_cta_path + 'images/gallery-img-2.jpg'),
        iconF: (window.kenzap_cta_path + 'images/gallery-img-2.jpg'),
        action: 'enlarge',
        link: '',
        linkTarget: false,
        key: new Date().getTime() + 2,
    }, {
        title: __( 'Bangkok', 'kenzap-gallery' ),
        description: __( 'Art Green Red', 'kenzap-gallery' ),
        iconMediaId: '',
        icon: (window.kenzap_cta_path + 'images/gallery-img-3.jpg'),
        iconF: (window.kenzap_cta_path + 'images/gallery-img-3.jpg'),
        action: 'enlarge',
        link: '',
        linkTarget: false,
        key: new Date().getTime() + 3,
    }, {
        title: __( 'Philippines', 'kenzap-gallery' ),
        description: __( 'Art Green Red', 'kenzap-gallery' ),
        iconMediaId: '',
        icon: (window.kenzap_cta_path + 'images/gallery-img-4.jpg'),
        iconF: (window.kenzap_cta_path + 'images/gallery-img-4.jpg'),
        action: 'enlarge',
        link: '',
        linkTarget: false,
        key: new Date().getTime() + 4,
    }, {
        title: __( 'Myanmar  ', 'kenzap-gallery' ),
        description: __( 'Art Green Red', 'kenzap-gallery' ),
        iconMediaId: '',
        icon: (window.kenzap_cta_path + 'images/gallery-img-5.jpg'),
        iconF: (window.kenzap_cta_path + 'images/gallery-img-5.jpg'),
        action: 'enlarge',
        link: '',
        linkTarget: false,
        key: new Date().getTime() + 5,
    }, {
        title: __( 'Indonesia  ', 'kenzap-gallery' ),
        description: __( 'Art Green Red', 'kenzap-gallery' ),
        iconMediaId: '',
        icon: (window.kenzap_cta_path + 'images/gallery-img-6.jpg'),
        iconF: (window.kenzap_cta_path + 'images/gallery-img-6.jpg'),
        action: 'enlarge',
        link: '',
        linkTarget: false,
        key: new Date().getTime() + 6,
    }, {
        title: __( 'Japan  ', 'kenzap-gallery' ),
        description: __( 'Art Green Red', 'kenzap-gallery' ),
        iconMediaId: '',
        icon: (window.kenzap_cta_path + 'images/gallery-img-7.jpg'),
        iconF: (window.kenzap_cta_path + 'images/gallery-img-7.jpg'),
        action: 'enlarge',
        link: '',
        linkTarget: false,
        key: new Date().getTime() + 7,
    }, {
        title: __( 'Abstract', 'kenzap-gallery' ),
        description: __( 'Art Green Red', 'kenzap-gallery' ),
        iconMediaId: '',
        icon: (window.kenzap_cta_path + 'images/gallery-img-8.jpg'),
        iconF: (window.kenzap_cta_path + 'images/gallery-img-8.jpg'),
        action: 'enlarge',
        link: '',
        linkTarget: false,
        key: new Date().getTime() + 8,
    }, {
        title: __( 'Universe', 'kenzap-gallery' ),
        description: __( 'Art Green Red', 'kenzap-gallery' ),
        iconMediaId: '',
        icon: (window.kenzap_cta_path + 'images/gallery-img-9.jpg'),
        iconF: (window.kenzap_cta_path + 'images/gallery-img-9.jpg'),
        action: 'enlarge',
        link: '',
        linkTarget: false,
        key: new Date().getTime() + 9,
    }, {
        title: __( 'Vietnam', 'kenzap-gallery' ),
        description: __( 'Art Green Red', 'kenzap-gallery' ),
        iconMediaId: '',
        icon: (window.kenzap_cta_path + 'images/gallery-img-10.jpg'),
        iconF: (window.kenzap_cta_path + 'images/gallery-img-10.jpg'),
        action: 'enlarge',
        link: '',
        linkTarget: false,
        key: new Date().getTime() + 10,
    },
] );

/**
 * Generate inline styles for custom settings of the block
 * @param {Object} attributes - of the block
 * @returns {Node} generated styles
 */
export const getStyles = attributes => {
    const kenzapContanerStyles = {
        maxWidth: `${ attributes.containerMaxWidth === '100%' ? '100%' : attributes.containerMaxWidth + 'px' }`,
        '--maxWidth': `${ attributes.containerMaxWidth === '100%' ? '100vw' : attributes.containerMaxWidth + ' ' } `,
    };

    const hexToRgbA = ( hex, alpha ) => {
        let c;
        if ( /^#([A-Fa-f0-9]{3}){1,2}$/.test( hex ) ) {
            c = hex.substring( 1 ).split( '' );
            if ( c.length === 3 ) {
                c = [ c[ 0 ], c[ 0 ], c[ 1 ], c[ 1 ], c[ 2 ], c[ 2 ] ];
            }
            c = '0x' + c.join( '' );
            return 'rgba(' + [ ( c >> 16 ) & 255, ( c >> 8 ) & 255, c & 255 ].join( ',' ) + ',' + alpha + ')';
        }
        throw new Error( 'Bad Hex' );
    };

    const vars = {
        '--paddings': `${ attributes.containerPadding }`,
        '--paddings2': `${ attributes.containerSidePadding }px`,
        '--navigationSize': `${ attributes.navigationSize }px`,
        '--navigationColor': attributes.navigationColor,
        '--descriptionColor': attributes.descriptionColor,
        '--titleColor': attributes.titleColor,
        '--paddingsBetweenItems': `${ attributes.paddingsBetweenItems }px`,
        '--overlayColor': hexToRgbA( attributes.overlayColor, ( attributes.overlayOpacity / 100 ) ),
        '--imageSize': `${ attributes.imageSize }px`,
    };

    let additionalClassForOwlContainer = 'kenzap-lg-carousel';
    if ( attributes.containerMaxWidth < 992 ) {
        additionalClassForOwlContainer = 'kenzap-md-carousel';
    }
    if ( attributes.containerMaxWidth < 768 ) {
        additionalClassForOwlContainer = 'kenzap-sm-carousel';
    }
    if ( attributes.containerMaxWidth < 480 ) {
        additionalClassForOwlContainer = 'kenzap-xs-carousel';
    }

    if ( attributes.width100 ) {
        additionalClassForOwlContainer = 'kenzap-lg-carousel';
    }

    return {
        vars,
        kenzapContanerStyles,
        additionalClassForOwlContainer,
    };
};

export const attrs = {
    ...blockProps,

    align: {
        type: 'string',
        default: 'full',
    },

    containerPadding: {
        type: 'number',
        default: 10,
    },

    navigationSize: {
        type: 'number',
        default: 16,
    },

    imageSize: {
        type: 'number',
        default: 4,
    },

    displayType: {
        type: 'string',
        default: 'kp-horizontal',
    },

    titleColor: {
        type: 'string',
        default: '#000',
    },

    descriptionColor: {
        type: 'string',
        default: '#878787',
    },

    navigationColor: {
        type: 'string',
        default: '#878787',
    },

    isNavigationShow: {
        type: 'boolean',
        default: true,
    },

    hoverEffect: {
        type: 'string',
        default: '',
    },

    textLocation: {
        type: 'string',
        default: 'textInside',
    },

    paddingsBetweenItems: {
        type: 'number',
        default: 5,
    },

    overlayColor: {
        type: 'string',
        default: '#fff',
    },

    overlayOpacity: {
        type: 'number',
        default: 100,
    },

    items: {
        type: 'array',
        default: [],
    },

    typography: {
        type: 'array',
        default: [],
    },

    prev: {
        type: 'string',
        default: __( '‹ prev', 'kenzap-gallery' ),
    },

    next: {
        type: 'string',
        default: __( 'next ›', 'kenzap-gallery' ),
    },
    
    isFirstLoad: {
        type: 'boolean',
        default: true,
    },

    preview: {
        type: 'boolean',
        default: false,
    },
};

/**
 * Define typography defaults
 */
export const typographyArr = JSON.stringify([
    {
        'title': __( '- Title', 'kenzap-gallery' ),
        'font-size': 22,
        'font-weight': 7,
        'line-height': 40,
        'margin-bottom': 0,
        'color':'#333333'
    },
    {
        'title': __( '- Description', 'kenzap-gallery' ),
        'font-size': 14,
        'font-weight': 3,
        'line-height': 20,
        'color':'#777777'
    },    
    {
        'title': __( '- Filters', 'kenzap-gallery' ),
        'font-size': 16,
        'font-weight': 3,
        'line-height': 28,
        'margin-bottom': 30,
        'color':'#666666'
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
registerBlockType( 'kenzap/cta-51', {
    title: __( 'Carousel Gallery', 'kenzap-gallery' ),
    icon: 'media-spreadsheet',
    category: 'layout',
    keywords: [
        __( 'kenzap cta 51', 'kenzap-gallery' ),
        __( 'carousel, sliding gallery', 'kenzap-gallery' ),
        __( 'horizontal instagram like gallery', 'kenzap-gallery' ),
    ],
    anchor: true,
    html: true,
    supports: {
        align: [ 'full', 'wide' ],
    },
    attributes: attrs,
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

        if ( props.attributes.preview ) return ( <img src={ `${ window.kenzap_cta_path + 'cta-51/preview.jpeg' }` } /> );
        
        if ( props.attributes.items.length === 0 && props.attributes.isFirstLoad ) {
            props.setAttributes( {
                items: [ ...JSON.parse( defaultSubBlocks ) ],
                isFirstLoad: false,
            } );
        }
        Object.keys( props.attributes ).forEach( attr => {
            if ( typeof props.attributes[ attr ] === 'undefined' ) {
                props.attributes[ attr ] = attrs[ attr ].default;
            }
        } );
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

        Object.keys( attributes ).forEach( attr => {
            if ( typeof attributes[ attr ] === 'undefined' ) {
                attributes[ attr ] = attrs[ attr ].default;
            }
        } );

        const { vars, kenzapContanerStyles, additionalClassForOwlContainer } = getStyles( props.attributes );

        const getImage = ( item ) => {
            switch ( item.action ) {
                case 'link':
                    return (
                        <a
                            href={ item.link }
                            target={ item.linkTarget ? '_blank' : '_self' }
                            style={ {
                                backgroundImage: `url(${ (item.icon) })`,
                            } }
                            rel="noopener noreferrer"
                        />
                    );

                case 'nothing':
                    return (
                        <a
                            className="nothing"
                            style={ {
                                backgroundImage: `url(${ (item.icon) })`,
                            } }
                        />
                    );
                default:
                    return (
                        <a
                            href={ item.iconF }
                            data-thumb={ item.icon }
                            data-fancybox="gallery"
                            style={ {
                                backgroundImage: `url(${ (item.icon) })`,
                            } }
                        />
                    );
            }
        };

        const getLink = ( item ) => {
            switch ( item.action ) {
                case 'link':
                    return (
                        <a
                            href={ item.link }
                            target={ item.linkTarget ? '_blank' : '_self' }
                            rel="noopener noreferrer"
                        >
                            <RichText.Content
                                tagName="span"
                                value={ item.title }
                                style={ getTypography( attributes, 0 ) }
                            />
                        </a>
                    );
                case 'nothing':
                    return (
                        <a href="javascript:;">
                            <RichText.Content
                                tagName="span"
                                value={ item.title }
                                style={ getTypography( attributes, 0 ) }
                            />
                        </a>
                    );
                default:
                    return (
                        <a
                            href="javascript:;"
                        >
                            <RichText.Content
                                tagName="span"
                                className="gallery-link"
                                value={ item.title }
                                style={ getTypography( attributes, 0 ) }
                            />
                        </a>
                    );
            }
        };

        return (
            <div className={ className ? className : '' } style={ vars }>
                <ContainerSave
                    className={ `kenzap-gallery-3 admin ${ attributes.hoverEffect } ${ attributes.textLocation } ${ attributes.displayType }` }
                    attributes={ attributes }
                    style={ vars }
                    withBackground
                    withPadding
                >
                    <div className="kenzap-container" data-images={ attributes.imageSize } style={ kenzapContanerStyles }>
                        { attributes.nestedBlocks == 'top' && <InnerBlocks.Content /> }
                        { attributes.isNavigationShow &&
                            <ul className="kp-nav" style={ {...getTypography( attributes, 2, 'margin-bottom' ),...getTypography( attributes, 2, 'text-align' ) } }>
                                <li>
                                    <RichText.Content
                                        tagName="span"
                                        className="gallery-pn gallery-prev"
                                        value={ attributes.prev }
                                        style={ getTypography( attributes, 2 ) }
                                    />
                                </li>
                                <li>
                                    <RichText.Content
                                        tagName="span"
                                        className="gallery-pn gallery-next"
                                        value={ attributes.next }
                                        style={ getTypography( attributes, 2 ) }
                                    />
                                </li>
                            </ul>
                        }
                        <div className={ `kp-list owl-carousel ${ additionalClassForOwlContainer }` }>
                            { attributes.items && attributes.items.map( ( item ) => {
                                return (
                                    <div
                                        key={ item.key }
                                        className="kp-item"
                                    >
                                        <div className="gallery-box">
                                            <div className="kp-img">
                                                { getImage( item ) }
                                            </div>
                                            <div className="kp-info">
                                                <h3
                                                    style={ getTypography( attributes, 0 ) }
                                                >
                                                    { getLink( item ) }
                                                </h3>
                                                <ul style={ {...getTypography( attributes, 1, 'text-align' ) } }>
                                                    <li>
                                                        { item.action === 'link' ? (
                                                            <a
                                                                href={ item.link }
                                                                target={ item.action === 'link' && item.linkTarget ? '_blank' : '_self' }
                                                                style={ getTypography( attributes, 1 ) }
                                                                className={ 'gallery-link' }
                                                                rel="noopener noreferrer"
                                                            >
                                                                <RichText.Content
                                                                    tagName="span"
                                                                    value={ item.description }
                                                                    style={ getTypography( attributes, 1 ) }
                                                                />
                                                            </a>
                                                        ) : (
                                                            <a
                                                                href={ 'javascript:;' }
                                                                style={ getTypography( attributes, 1 ) }
                                                                className={ item.action === 'nothing' ? '' : item.action !== 'link' ? 'gallery-link' : '' }
                                                            >
                                                                <RichText.Content
                                                                    tagName="span"
                                                                    value={ item.description }
                                                                    style={ getTypography( attributes, 1 ) }
                                                                />
                                                            </a>
                                                        ) }
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                );
                            } ) }
                        </div>
                        { attributes.nestedBlocks == 'bottom' && <InnerBlocks.Content /> }
                    </div>
                </ContainerSave>
            </div>
        );
    },
} );
