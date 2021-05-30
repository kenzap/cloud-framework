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
    description: __( 'Lorem ipsum dolor sitam et consectetuer adipisci elit lorem ipsum dolor sit amet.', 'kenzap-timeline' ),
    time: 'March 2019',
};

export const defaultSubBlocks = JSON.stringify( [
    {
        title: __( 'Welcome Dinner', 'kenzap-timeline' ),
        description: __( 'Lorem ipsum dolor sitam et consectetuer adipisci elit lorem ipsum dolor sit amet.', 'kenzap-timeline' ),
        time: 'March 2019',
        key: new Date().getTime() + 1,
    },
    {
        title: __( 'Office Relocation', 'kenzap-timeline' ),
        description: __( 'Lorem ipsum dolor sitam et consectetuer adipisci elit lorem ipsum dolor sit amet.', 'kenzap-timeline' ),
        time: 'September 2019',
        key: new Date().getTime() + 2,
    },
    {
        title: __( 'New Release', 'kenzap-timeline' ),
        description: __( 'Lorem ipsum dolor sitam et consectetuer adipisci elit lorem ipsum dolor sit amet.', 'kenzap-timeline' ),
        time: 'December 2019',
        key: new Date().getTime() + 3,
    },
    {
        title: __( 'Corporate Meetup', 'kenzap-timeline' ),
        description: __( 'Lorem ipsum dolor sitam et consectetuer adipisci elit lorem ipsum dolor sit amet.', 'kenzap-timeline' ),
        time: 'January 2020',
        key: new Date().getTime() + 4,
    },
    {
        title: __( 'New Cofounders', 'kenzap-timeline' ),
        description: __( 'Lorem ipsum dolor sitam et consectetuer adipisci elit lorem ipsum dolor sit amet.', 'kenzap-timeline' ),
        time: 'February 2020',
        key: new Date().getTime() + 5,
    },
    {
        title: __( 'Sending Around', 'kenzap-timeline' ),
        description: __( 'Lorem ipsum dolor sitam et consectetuer adipisci elit lorem ipsum dolor sit amet.', 'kenzap-timeline' ),
        time: 'May 2020',
        key: new Date().getTime() + 6,
    },
    {
        title: __( 'Building New Office', 'kenzap-timeline' ),
        description: __( 'Lorem ipsum dolor sitam et consectetuer adipisci elit lorem ipsum dolor sit amet.', 'kenzap-timeline' ),
        time: 'August 2020',
        key: new Date().getTime() + 7,
    },
    {
        title: __( 'Trip to China', 'kenzap-timeline' ),
        description: __( 'Lorem ipsum dolor sitam et consectetuer adipisci elit lorem ipsum dolor sit amet.', 'kenzap-timeline' ),
        time: 'January 2021',
        key: new Date().getTime() + 8,
    },
] );

/**
 * Define typography defaults
 */
export const typographyArr = JSON.stringify([
    {
        'title': __( '- Time', 'kenzap-timeline' ),
        'font-size': 20,
        'font-weight': 5,
        'line-height': 20,
        'margin-bottom': 0,
        'color': '#ffffff',
    },
    {
        'title': __( '- Title', 'kenzap-timeline' ),
        'font-size': 20,
        'font-weight': 6,
        'line-height': 20,
        'margin-bottom': 15,
        'color': '#ffffff',
    },
    {
        'title': __( '- Description', 'kenzap-timeline' ),
        'font-size': 14,
        'font-weight': 4,
        'line-height': 25,
        'color': '#ffffff',
    },
]);

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
        '--timeLineColor': attributes.timeLineColor,
        '--boxBackground': attributes.boxBackground,
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
registerBlockType( 'kenzap/cta-28', {
    title: __( 'Horizontal Timeline V1', 'kenzap-timeline' ),
    icon: 'calendar-alt',
    category: 'layout',
    keywords: [
        __( 'kenzap cta 28', 'kenzap-timeline' ),
        __( 'timeline', 'kenzap-timeline' ),
        __( 'horizontal timeline', 'kenzap-timeline' ),
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

        timeLineColor: {
            type: 'string',
        },

        boxBackground: {
            type: 'string',
        },

        items: {
            type: 'array',
            default: [],
        },

        highlightedRecords: {
            type: 'number',
            default: 5,
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

        if ( props.attributes.preview ) return ( <img src={ `${ window.kenzap_cta_path + 'cta-28/preview.jpeg' }` } /> );

        if ( props.attributes.isFirstLoad ) {
            props.setAttributes( {
                items: [ ...JSON.parse( defaultSubBlocks ) ],
                isFirstLoad: false,
                timeLineColor: '#007cba',
                boxBackground: '#242424',
                backgroundColor: '#333333'
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

        const { vars, kenzapContanerStyles, additionalClassForOwlContainer } = getStyles( props.attributes );

        return (
            <div className={ className ? className : '' } style={ vars }>
                <ContainerSave
                    className={ `kenzap-timeline-3 block-${ attributes.blockUniqId }` }
                    attributes={ attributes }
                    style={ vars }
                    withBackground
                    withPadding
                >
                    <div className="kenzap-container" style={ kenzapContanerStyles }>
                        { attributes.nestedBlocks == 'top' && <InnerBlocks.Content /> }
                        <div className={ `timeline owl-carousel ${ additionalClassForOwlContainer }` }>
                            { attributes.items && attributes.items.map( ( item, index ) => (
                                <div
                                    key={ item.key }
                                    className={ `timeline-content ${ attributes.highlightedRecords > index ? 'past-time' : '' } ${ attributes.highlightedRecords == index+1 ? 'past-time-last' : '' }` }
                                >
                                    <div className="time-wrapper">
                                        <div className="time">
                                            <RichText.Content
                                                tagName="p"
                                                value={ item.time }
                                                style={ getTypography( attributes, 0 ) }
                                            />
                                        </div>
                                    </div>
                                    <div className="info-wrapper">
                                        <div className="info">
                                            <RichText.Content
                                                tagName="h3"
                                                value={ item.title }
                                                style={ getTypography( attributes, 1 ) }
                                            />
                                            <RichText.Content
                                                tagName="p"
                                                value={ item.description }
                                                style={ getTypography( attributes, 2 ) }
                                            />
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
