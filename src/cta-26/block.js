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
    description: __( 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna suprecent.', 'kenzap-timeline' ),
    time: `10.00${ __( 'am' ) } - 11.00${ __( 'am' ) }`,
};

export const defaultSubBlocks = JSON.stringify([
    {
        title: __( 'Registration', 'kenzap-timeline' ),
        description: __( 'Visit ticket counters to register or print your badge. Please download app in advance.', 'kenzap-timeline' ),
        time: `8.00${ __( 'am' ) } - 10.00${ __( 'am' ) }`,
        key: new Date().getTime() + 1,
    },
    {
        title: __( 'Introduction', 'kenzap-timeline' ),
        description: __( 'Welcome speach from conference organizers. Overview of upcomming events.', 'kenzap-timeline' ),
        time: `10.00${ __( 'am' ) } - 11.00${ __( 'am' ) }`,
        key: new Date().getTime() + 2,
    },
    {
        title: __( 'Networking', 'kenzap-timeline' ),
        description: __( 'Main conference part where all participants can network and exchange their contacts.', 'kenzap-timeline' ),
        time: `11.00${ __( 'am' ) } - 4.00${ __( 'pm' ) }`,
        key: new Date().getTime() + 3,
    },
    {
        title: __( 'Live Demo', 'kenzap-timeline' ),
        description: __( '10 exhibiting startups are presenting their prototype on the main stage.', 'kenzap-timeline' ),
        time: `4.00${ __( 'pm' ) } - 6.00${ __( 'pm' ) }`,
        key: new Date().getTime() + 4,
    },
    {
        title: __( 'Pub Crawl', 'kenzap-timeline' ),
        description: __( 'Second conference round! Enjoy live music, beer & city vibes.', 'kenzap-timeline' ),
        time: `6.00${ __( 'pm' ) } - 9.00${ __( 'pm' ) }`,
        key: new Date().getTime() + 5,
    },
] );

/**
 * Define typography defaults
 */
export const typographyArr = JSON.stringify([
    {
        'title': __( '- Time', 'kenzap-timeline' ),
        'font-size': 18,
        'font-weight': 5,
        'line-height': 24,
        'margin-bottom': 10,
        'color': '#333333',
    },
    {
        'title': __( '- Title', 'kenzap-timeline' ),
        'font-size': 18,
        'font-weight': 5,
        'line-height': 24,
        'margin-bottom': 8,
        'color': '#333333',
    },
    {
        'title': __( '- Description', 'kenzap-timeline' ),
        'font-size': 14,
        'font-weight': 4,
        'line-height': 24,
        'color': '#333333',
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
    };

    return {
        vars,
        kenzapContanerStyles,
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
registerBlockType( 'kenzap/cta-26', {
    title: __( 'Conference Timeline', 'kenzap-timeline' ),
    icon: 'calendar-alt',
    category: 'layout',
    keywords: [
        __( 'kenzap cta 26', 'kenzap-timeline' ),
        __( 'timeline', 'kenzap-timeline' ),
        __( 'conference keynote', 'kenzap-timeline' ),
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
        
        titleSize: {
            type: 'number',
            default: 18,
        },

        descriptionSize: {
            type: 'number',
            default: 14,
        },

        timeSize: {
            type: 'number',
            default: 18,
        },

        timeLineColor: {
            type: 'string',
        },

        withAnimation: {
            type: 'boolean',
            default: true,
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

        if ( props.attributes.preview ) return ( <img src={ `${ window.kenzap_cta_path + 'cta-26/preview.jpeg' }` } /> );

        if ( props.attributes.isFirstLoad ) {

            props.setAttributes( {
                items: [ ...JSON.parse( defaultSubBlocks ) ],
                isFirstLoad: false,
                timeLineColor: '#007cba',
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

        const time = ( item, attributes ) => (
            <div className="kenzap-col-6">

                <div className="time">
                    <RichText.Content
                        tagName="div"
                        value={ item.time }
                        style={ getTypography( attributes, 0 ) }
                    />
                </div>
            </div>
        );

        const info = ( item, attributes ) => (
            <div className="kenzap-col-6">
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
        );

        return (
            <div className={ className ? className : '' } style={ vars }>
                <ContainerSave
                    className={ `kenzap-timeline-1 ${ attributes.withAnimation ? 'kp-animate' : '' } block-${ attributes.blockUniqId }` }
                    attributes={ attributes }
                    style={ vars }
                    withBackground
                    withPadding
                >
                    { attributes.nestedBlocks == 'top' && <InnerBlocks.Content /> }
                    <div className="kenzap-container" style={ kenzapContanerStyles }>
                        
                        <div className="timeline">
                            { attributes.items && attributes.items.map( ( item, index ) => (
                                <div
                                    key={ item.key }
                                    className="timeline-content"
                                >
                                    { ( index + 1 ) % 2 !== 0 ? (
                                        <div className="kenzap-row">
                                            { time( item, attributes ) }
                                            { info( item, attributes ) }
                                        </div>
                                    ) : (
                                        <div className="kenzap-row">
                                            { info( item, attributes ) }
                                            { time( item, attributes ) }
                                        </div>
                                    ) }
                                </div>
                            ) ) }
                        </div>
                        
                    </div>
                    { attributes.nestedBlocks == 'bottom' && <InnerBlocks.Content /> }
                </ContainerSave>
            </div>
        );
    },
} );
