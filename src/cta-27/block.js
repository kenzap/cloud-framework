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
    title: __( 'New event', 'kenzap-timeline' ),
    description: __( 'Duis sed odio sit amet nibh vulputate cursus sit amet mauris morbi accumsa ipsum velit etiro auctor ornare odio.', 'kenzap-timeline' ),
};

export const defaultSubBlocks = JSON.stringify( [
    {
        title: __( 'TIMELINE FIRST', 'kenzap-timeline' ),
        description: __( 'Duis sed odio sit amet nibh vulputate cursus sit amet mauris morbi accumsa ipsum velit etiro auctor ornare odio.', 'kenzap-timeline' ),
        key: new Date().getTime() + 1,
    },
    {
        title: __( 'TIMELINE SECOND', 'kenzap-timeline' ),
        description: __( 'Duis sed odio sit amet nibh vulputate cursus sit amet mauris morbi accumsa ipsum velit etiro auctor ornare odio.', 'kenzap-timeline' ),
        key: new Date().getTime() + 2,
    },
    {
        title: __( 'TIMELINE THIRD', 'kenzap-timeline' ),
        description: __( 'Duis sed odio sit amet nibh vulputate cursus sit amet mauris morbi accumsa ipsum velit etiro auctor ornare odio.', 'kenzap-timeline' ),
        key: new Date().getTime() + 3,
    },
    {
        title: __( 'TIMELINE FORTH', 'kenzap-timeline' ),
        description: __( 'Duis sed odio sit amet nibh vulputate cursus sit amet mauris morbi accumsa ipsum velit etiro auctor ornare odio.', 'kenzap-timeline' ),
        key: new Date().getTime() + 4,
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
        '--maxWidth': `${ attributes.containerMaxWidth === '100%' ? '100wh' : attributes.containerMaxWidth + ' ' } `,
    };

    const vars = {
        '--paddings': `${ attributes.containerPadding }`,
        '--paddings2': `${ attributes.containerSidePadding }px`,
        '--verticalLineAndDotsColor': attributes.verticalLineAndDotsColor,
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
        'title': __( '- Title', 'kenzap-timeline' ),
        'font-size': 16,
        'font-weight': 4,
        'line-height': 16,
        'margin-bottom': 20,
        'color': '#ffffff',
    },
    {
        'title': __( '- Description', 'kenzap-timeline' ),
        'font-size': 14,
        'font-weight': 4,
        'line-height': 24,
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
registerBlockType( 'kenzap/cta-27', {
    title: __( 'Minimalist Timeline', 'kenzap-timeline' ),
    icon: 'calendar-alt',
    category: 'layout',
    keywords: [
        __( 'kenzap cta 27', 'kenzap-timeline' ),
        __( 'vertical timeline', 'kenzap-timeline' ),
        __( 'roadmap', 'kenzap-timeline' ),
    ],
    anchor: true,
    html: true,
    supports: {
        align: [ 'full', 'wide' ],
    },
    attributes: {
        ...blockProps,

        align: {
            type: 'string',
            default: 'full',
        },

        verticalLineAndDotsColor: {
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

        if ( props.attributes.preview ) return ( <img src={ `${ window.kenzap_cta_path + 'cta-27/preview.jpeg' }` } /> );

        if ( props.attributes.isFirstLoad ) {
             
            props.setAttributes( {
                items: [ ...JSON.parse( defaultSubBlocks ) ],
                isFirstLoad: false,
                backgroundColor: '#007cba',
                verticalLineAndDotsColor: '#FFFFFF'
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
            <div className={ className ? className : '' } style={ vars }>
                <ContainerSave
                    className={ `kenzap-timeline-2-dark block-${ attributes.blockUniqId }` }
                    attributes={ attributes }
                    style={ vars }
                    withBackground
                    withPadding
                >
                    <div className="kenzap-container" style={ kenzapContanerStyles }>
                        { attributes.nestedBlocks == 'top' && <InnerBlocks.Content /> }
                        <div className="timeline">
                            { attributes.items && attributes.items.map( ( item ) => (
                                <div
                                    key={ item.key }
                                    className="timeline-content"
                                >
                                    <div className="kenzap-row">
                                        <div className="kenzap-col-6">
                                            <div className="info">

                                                <RichText.Content
                                                    tagName="h3"
                                                    value={ item.title }
                                                    style={ getTypography( attributes, 0 ) }
                                                    />
                                                <RichText.Content
                                                    tagName="p"
                                                    value={ item.description }
                                                    style={ getTypography( attributes, 1 ) }
                                                    />
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
