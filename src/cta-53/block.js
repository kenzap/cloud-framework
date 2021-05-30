import './style.scss';
import './editor.scss';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
import { blockProps, ContainerSave } from '../commonComponents/container/container';
const { InnerBlocks } = wp.editor;
import Edit from './edit';
let isScriptLoad = false;

/**
 * Provides the initial data for new block
 */
export const defaultItem = {
    iconMediaId: '',
    icon: window.kenzap_cta_path + 'images/gallery-img-1.jpg',
    iconF: window.kenzap_cta_path + 'images/gallery-img-1.jpg',
    action: 'enlarge',
    link: '',
    linkTarget: false,
};

export const defaultSubBlocks = JSON.stringify( [
    {
        iconMediaId: '',
        icon: window.kenzap_cta_path + 'images/gallery-img-1.jpg',
        iconF: window.kenzap_cta_path + 'images/gallery-img-1.jpg',
        action: 'enlarge',
        link: '',
        linkTarget: false,
        key: new Date().getTime() + 1,
    }, {
        iconMediaId: '',
        icon: window.kenzap_cta_path + 'images/gallery-img-2.jpg',
        iconF: window.kenzap_cta_path + 'images/gallery-img-2.jpg',
        action: 'enlarge',
        link: '',
        linkTarget: false,
        key: new Date().getTime() + 2,
    }, {
        iconMediaId: '',
        icon: window.kenzap_cta_path + 'images/gallery-img-3.jpg',
        iconF: window.kenzap_cta_path + 'images/gallery-img-3.jpg',
        action: 'enlarge',
        link: '',
        linkTarget: false,
        key: new Date().getTime() + 3,
    }, {
        iconMediaId: '',
        icon: window.kenzap_cta_path + 'images/gallery-img-4.jpg',
        iconF: window.kenzap_cta_path + 'images/gallery-img-4.jpg',
        action: 'enlarge',
        link: '',
        linkTarget: false,
        key: new Date().getTime() + 4,
    }, {
        iconMediaId: '',
        icon: window.kenzap_cta_path + 'images/gallery-img-5.jpg',
        iconF: window.kenzap_cta_path + 'images/gallery-img-5.jpg',
        action: 'enlarge',
        link: '',
        linkTarget: false,
        key: new Date().getTime() + 5,
    }, {
        iconMediaId: '',
        icon: window.kenzap_cta_path + 'images/gallery-img-6.jpg',
        iconF: window.kenzap_cta_path + 'images/gallery-img-6.jpg',
        action: 'enlarge',
        link: '',
        linkTarget: false,
        key: new Date().getTime() + 6,
    }, {
        iconMediaId: '',
        icon: window.kenzap_cta_path + 'images/gallery-img-7.jpg',
        iconF: window.kenzap_cta_path + 'images/gallery-img-7.jpg',
        action: 'enlarge',
        link: '',
        linkTarget: false,
        key: new Date().getTime() + 7,
    }, {
        iconMediaId: '',
        icon: window.kenzap_cta_path + 'images/gallery-img-8.jpg',
        iconF: window.kenzap_cta_path + 'images/gallery-img-8.jpg',
        action: 'enlarge',
        link: '',
        linkTarget: false,
        key: new Date().getTime() + 8,
    }, {
        iconMediaId: '',
        icon: window.kenzap_cta_path + 'images/gallery-img-9.jpg',
        iconF: window.kenzap_cta_path + 'images/gallery-img-9.jpg',
        action: 'enlarge',
        link: '',
        linkTarget: false,
        key: new Date().getTime() + 9,
    }, {
        iconMediaId: '',
        icon: window.kenzap_cta_path + 'images/gallery-img-10.jpg',
        iconF: window.kenzap_cta_path + 'images/gallery-img-10.jpg',
        action: 'enlarge',
        link: '',
        linkTarget: false,
        key: new Date().getTime() + 10,
    }, {
        iconMediaId: '',
        icon: window.kenzap_cta_path + 'images/gallery-img-11.jpg',
        iconF: window.kenzap_cta_path + 'images/gallery-img-11.jpg',
        action: 'enlarge',
        link: '',
        linkTarget: false,
        key: new Date().getTime() + 11,
    }, {
        iconMediaId: '',
        icon: window.kenzap_cta_path + 'images/gallery-img-12.jpg',
        iconF: window.kenzap_cta_path + 'images/gallery-img-12.jpg',
        action: 'enlarge',
        link: '',
        linkTarget: false,
        key: new Date().getTime() + 12,
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

    const vars = {
        '--paddings': `${ attributes.containerPadding }`,
        '--paddings2': `${ attributes.containerSidePadding }px`,
        '--overlayOpacity': `${ attributes.overlayOpacity / 100 }`,
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

    overlayOpacity: {
        type: 'number',
        default: 80,
    },

    items: {
        type: 'array',
        default: [],
    },

    columns: {
        type: 'string',
        default: 'default',
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
registerBlockType( 'kenzap/cta-53', {
    title: __( 'Masonry Gallery', 'kenzap-gallery' ),
    description: __( 'Save and preview changes on frontend.', 'kenzap-gallery' ),
    icon: 'media-spreadsheet',
    category: 'layout',
    keywords: [
        __( 'kenzap cta 53', 'kenzap-gallery' ),
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

        if( props.attributes.preview) return ( <img src={ `${ window.kenzap_cta_path + 'cta-53/preview.jpeg' }` } /> );

        if( !isScriptLoad ){

            setTimeout(function(){

                // jQuery.getScript( window.kenzap_cta_path + 'isotope/imagesloaded.pkgd.min.js', function( data, textStatus, jqxhr ) {
                //     jQuery.getScript( window.kenzap_cta_path + 'isotope/isotope.pkgd.min.js', function( data, textStatus, jqxhr ) {
                //         jQuery.getScript( window.kenzap_cta_path + 'cta-53/editor.script.js', function( data, textStatus, jqxhr ) { ( function( $ ) { kenzapIsotope($); }); }( jQuery ) );
                //     });
                // });
                  
                isScriptLoad = true;
            },1000);
        }

        if ( props.attributes.items.length === 0 && props.attributes.isFirstLoad ) {
            props.setAttributes( {
                items: [ ...JSON.parse( defaultSubBlocks ) ],
                isFirstLoad: false,
            } );
            
            // refresh isotope
            if (typeof kenzapIsotope === 'function') { kenzapIsotope($); }
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
                            className="link"
                            style={ {
                                backgroundImage: `url(${ item.icon })`,
                            } }
                            rel="noopener noreferrer"
                        />
                    );

                case 'nothing':
                    return (
                        <a
                            className="nothing"
                            style={ {
                                backgroundImage: `url(${ item.icon })`,
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
                                backgroundImage: `url(${ item.icon })`,
                            } }
                        />
                    );
            }
        };

        const getClass = ( currentIndex ) => {
            const chunks = Object.keys( attributes.items ).reduce( ( resultArray, item, index ) => {
                const chunkIndex = Math.floor( index / 12 );

                if ( ! resultArray[ chunkIndex ] ) {
                    resultArray[ chunkIndex ] = [];
                }

                resultArray[ chunkIndex ].push( item );

                return resultArray;
            }, [] );

            let index = 0;

            for ( let i = 0; i < chunks.length; i++ ) {
                for ( let j = 0; j < chunks[ i ].length; j++ ) {
                    if ( Number( chunks[ i ][ j ] ) === currentIndex ) {
                        index = j;
                        break;
                    }
                }
            }

            if ( index === 3 ) {
                return 'width-22';
            }
            if ( index === 4 ) {
                return 'width-43';
            }
            if ( index === 5 ) {
                return 'width-35';
            }
            if ( index === 6 || index === 8 ) {
                return 'width-40';
            }
            if ( index === 7 ) {
                return 'width-20';
            }
            return '';
        };

        return (
            <div className={ className ? className : '' } style={ vars }>
                <ContainerSave
                    className={ 'kenzap-gallery-5 ' }
                    attributes={ attributes }
                    style={ vars }
                    withBackground
                    withPadding
                >
                    <div className="kenzap-container" style={ kenzapContanerStyles }>
                        { attributes.nestedBlocks == 'top' && <InnerBlocks.Content /> }
                        <div className={ 'kp-list' }>
                            <div className="grid-sizer" />
                            { attributes.items && attributes.items.map( ( item, index ) => {
                                return (
                                    <div
                                        className={ `kp-iitem ${ getClass( index ) }` }
                                        key={ item.key }
                                    >
                                        <div
                                            className="gallery-box"
                                        >
                                            <div className="kp-img">
                                                { getImage( item ) }
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
