import './style.scss';
import './editor.scss';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText, InnerBlocks } = wp.editor;
import { blockProps, ContainerSave } from '../commonComponents/container/container';
import { getTypography } from '../commonComponents/typography/typography';
import Edit from './edit';

export const defaultSubBlocks = JSON.stringify( [
    {
        title: '',
        iconMediaId: '',
        icon: window.kenzap_cta_path + 'images/galleryd-img-1.jpg',
        action: 'nothing',
        link: '',
        linkTarget: false,
        key: new Date().getTime() + 1,
    }, {
        title: __( 'LEAR MORE <br><strong>ABOUT KENZAP</strong>', 'kenzap-gallery' ),
        description: __( 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed placerat id nisl id vehicula. Nunc aliquam ligula massa, vitae tempor elit tristique vitae. Sed eget luctus nisl, quis rutrum', 'kenzap-gallery' ),
        buttonText: __( 'Button Text', 'kenzap-gallery' ),
        iconMediaId: '',
        icon: window.kenzap_cta_path + 'images/galleryd-img-3.jpg',
        action: 'nothing',
        link: '',
        linkTarget: false,
        key: new Date().getTime() + 2,
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
    };

    if(attributes.titleColor){vars['--titleColor'] = `${ attributes.titleColor }` }

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

    titleColor: {
        type: 'string',
    },

    buttonProps: {
        type: 'object',
        default: {
            link: '#',
            linkTarget: false,
        },
    },

    typography: {
        type: 'array',
        default: [],
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
 * Define typography defaults
 */
export const typographyArr = JSON.stringify([
    {
        'title': __( '- Title', 'kenzap-gallery' ),
        'type': 'title',
        'font-size': 44,
        'font-size-t': 40,
        'font-size-m': 40,
        'font-weight': 5,
        'line-height': 44,
        'padding-top': 30,
        'padding-bottom': 20,
        'margin-bottom': 0,
        'color':'#23282d'
    },
    {
        'title': __( '- Description', 'kenzap-gallery' ),
        'font-size': 15,
        'font-weight': 4,
        'line-height': 25,
        'margin-bottom': 0,
        'color':'#666666'
    },
    {
        'title': __( '- Button', 'kenzap-gallery' ),
        'type': 'button',
        'font-size': 16,
        'font-weight': 4,
        'line-height': 30,

        'padding-top': 12,
        'padding-right': 48,
        'padding-bottom': 12,
        'padding-left': 48,
        'border-radius': 4,

        'margin-bottom': 0,
        'color':'#23282d',
        'border-color':'#23282d',
        'background-color':'#ffffff'
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
registerBlockType( 'kenzap/cta-55', {
    title: __( 'Featured Image Gallery', 'kenzap-gallery' ),
    icon: 'media-spreadsheet',
    category: 'layout',
    keywords: [
        __( 'kenzap cta 55', 'kenzap-gallery' ),
        __( 'gallery', 'kenzap-gallery' ),
        __( 'image drop', 'kenzap-gallery' ),
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

        if ( props.attributes.preview ) return ( <img src={ `${ window.kenzap_cta_path + 'cta-55/preview.jpeg' }` } /> );

        if ( props.attributes.items.length === 0 && props.attributes.isFirstLoad ) {
            props.setAttributes( {
                items: [ ...JSON.parse( defaultSubBlocks ) ],
                isFirstLoad: false,
                containerPadding: 15,
                titleColor:"#23282d"
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
                            rel="noopener noreferrer"
                        >
                            <img src={ item.icon } alt="" />
                        </a>
                    );

                case 'nothing':
                default:
                    return (
                        <a
                            href="javascript:void(0)"
                            className="nothing"
                        >
                            <img src={ item.icon } alt="" />
                        </a>
                    );
            }
        };

        return (
            <div className={ className ? className : '' } style={ vars }>
                <ContainerSave
                    className={ `kenzap-gallery-7 ` }
                    attributes={ attributes }
                    style={ vars }
                    withBackground
                    withPadding
                >
                    <div className="kenzap-container" style={ kenzapContanerStyles }>
                        { attributes.nestedBlocks == 'top' && <InnerBlocks.Content /> }
                        <div className={ 'kp-list' }>
                            <div className="kp-item">
                                <div className="gallery-box">
                                    <div className="kp-img kp-img0">
                                        { getImage( attributes.items[ 0 ] ) }
                                    </div>
                                    <div className="kp-img kp-img1">
                                        { getImage( attributes.items[ 1 ] ) }
                                        <div className="kp-info">
                                            <RichText.Content
                                                tagName="h3"
                                                className="kp-h3"
                                                value={ attributes.items[ 1 ].title }
                                                style={ getTypography( attributes, 0 ) }
                                            />

                                            <RichText.Content
                                                tagName="p"
                                                className="kp-p"
                                                value={ attributes.items[ 1 ].description }
                                                style={ getTypography( attributes, 1 ) }
                                            />

                                            <a
                                                href={ attributes.buttonProps.link }
                                                className="kp-a"
                                                target={ attributes.buttonProps.linkTarget ? '_blank' : '_self' }
                                                rel="noopener noreferrer"
                                                style={ getTypography( attributes, 2 ) }
                                            >
                                                { attributes.items[ 1 ].buttonText }
                                            </a>
                                               
                                        </div>
                                    </div>
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
