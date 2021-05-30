import './style.scss';
import './editor.scss';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText, InnerBlocks } = wp.editor;
import { blockProps, ContainerSave } from '../commonComponents/container/container';
import { getTypography } from '../commonComponents/typography/typography';
import Edit from './edit';

/**
 * Provides the initial data for new block
 */
export const defaultItem = {
    title: __( 'Designing Dreams', 'kenzap-gallery' ),
    iconMediaId: '',
    icon: window.kenzap_cta_path + 'images/gallery-img-7.jpg',
    iconF: window.kenzap_cta_path + 'images/gallery-img-7.jpg',
    action: 'nothing',
    link: '',
    linkTarget: false,
};

export const defaultSubBlocks = JSON.stringify( [
    {
        title: __( 'Designing Dreams', 'kenzap-gallery' ),
        iconMediaId: '',
        icon: window.kenzap_cta_path + 'images/gallery-img-7.jpg',
        iconF: window.kenzap_cta_path + 'images/gallery-img-7.jpg',
        action: 'nothing',
        link: '',
        linkTarget: false,
        key: new Date().getTime() + 1,
    }, {
        title: __( 'Parish Fashion Week', 'kenzap-gallery' ),
        iconMediaId: '',
        icon: window.kenzap_cta_path + 'images/gallery-img-3.jpg',
        iconF: window.kenzap_cta_path + 'images/gallery-img-3.jpg',
        action: 'nothing',
        link: '',
        linkTarget: false,
        key: new Date().getTime() + 2,
    }, {
        title: __( 'Sit Back and Relax', 'kenzap-gallery' ),
        iconMediaId: '',
        icon: window.kenzap_cta_path + 'images/gallery-img-4.jpg',
        iconF: window.kenzap_cta_path + 'images/gallery-img-4.jpg',
        action: 'nothing',
        link: '',
        linkTarget: false,
        key: new Date().getTime() + 3,
    }, {
        title: __( 'Something In The Water vol.2', 'kenzap-gallery' ),
        iconMediaId: '',
        icon: window.kenzap_cta_path + 'images/gallery-img-5.jpg',
        iconF: window.kenzap_cta_path + 'images/gallery-img-5.jpg',
        action: 'nothing',
        link: '',
        linkTarget: false,
        key: new Date().getTime() + 4,
    }, {
        title: __( 'Beauty & Fashion', 'kenzap-gallery' ),
        description: __( 'Art Green Red', 'kenzap-gallery' ),
        iconMediaId: '',
        icon: window.kenzap_cta_path + 'images/gallery-img-2.jpg',
        iconF: window.kenzap_cta_path + 'images/gallery-img-2.jpg',
        action: 'nothing',
        link: '',
        linkTarget: false,
        key: new Date().getTime() + 5,
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
        '--overlayColor': hexToRgbA( attributes.overlayColor, ( attributes.overlayOpacity / 100 ) ),
        '--paddingsBetweenItems': `${ attributes.paddingsBetweenItems }px`,
        '--paddingsBetweenItemsR': `${ attributes.paddingsBetweenItems/2 }px`,
    };

    return {
        vars,
        kenzapContanerStyles,
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

    hoverEffect: {
        type: 'string',
        default: 'kp-overlay-in',
    },

    overlayColor: {
        type: 'string',
        default: '#007cba',
    },

    overlayOpacity: {
        type: 'number',
        default: 85,
    },

    paddingsBetweenItems: {
        type: 'number',
        default: 50,
    },

    columns: {
        type: 'string',
        default: 'default',
    },

    typography: {
        type: 'array',
        default: [],
    },

    items: {
        type: 'array',
        default: [],
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
        'type': 'title',
        'font-size': 30,
        'font-size-t': 30,
        'font-size-m': 30,
        'font-weight': 6,
        'line-height': 54,
        'margin-bottom': 0,
        'color':'#ffffff'
    }
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
registerBlockType( 'kenzap/cta-52', {
    title: __( 'Wide 1 Column Gallery', 'kenzap-gallery' ),
    icon: 'media-spreadsheet',
    category: 'layout',
    keywords: [
        __( 'kenzap cta 52', 'kenzap-gallery' ),
        __( 'gallery', 'kenzap-gallery' ),
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

        if ( props.attributes.preview ) return ( <img src={ `${ window.kenzap_cta_path + 'cta-52/preview.jpeg' }` } /> ); 
        
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

        const { vars, kenzapContanerStyles } = getStyles( props.attributes );

        const getImage = ( item ) => {
            switch ( item.action ) {
                case 'link':
                    return (
                        <a
                            href={ item.link }
                            target={ item.linkTarget ? '_blank' : '_self' }
                            style={ {
                                backgroundImage: `url(${ item.icon })`,
                            } }
                            rel="noopener noreferrer"
                        />
                    );

                case 'nothing':
                default:
                    return (
                        <a
                            href="javascript:;"
                            className="nothing"
                            style={ {
                                backgroundImage: `url(${ item.icon })`,
                            } }
                        />
                    );
            }
        };

        const getLink = ( item ) => {
            switch ( item.action ) {
                case 'link':
                    return (
                        <RichText.Content
                            tagName="a"
                            value={ item.title }
                            href={ item.link }
                            target={ item.linkTarget ? '_blank' : '_self' }
                            rel="noopener noreferrer"
                            style={ getTypography( attributes, 0 ) }
                        />
                    );
                case 'nothing':
                default:
                    return (
                        <RichText.Content
                            tagName="a"
                            value={ item.title }
                            href={ item.link }
                            target={ item.linkTarget ? '_blank' : '_self' }
                            rel="noopener noreferrer"
                            style={ getTypography( attributes, 0 ) }
                        />
                    );
            }
        };

        return (
            <div className={ className ? className : '' } style={ vars }>
                <ContainerSave
                    className={ `kenzap-gallery-4 ${ attributes.hoverEffect }` }
                    attributes={ attributes }
                    style={ vars }
                    withBackground
                    withPadding
                >
                    <div className="kenzap-container" style={ kenzapContanerStyles }>
                        { attributes.nestedBlocks == 'top' && <InnerBlocks.Content /> }
                        <div className={ 'kp-list' }>
                            { attributes.items && attributes.items.map( ( item ) => {
                                return (
                                    <div
                                        className="gallery-box"
                                        key={ item.key }
                                    >
                                        <div className="kp-img">
                                            { getImage( item ) }
                                        </div>
                                        <div className="kp-info" style={ getTypography( attributes, 0, 'text-align' ) }>
                                            <h3 style={ getTypography( attributes, 0 ) }>
                                                { getLink( item ) }
                                            </h3>
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
