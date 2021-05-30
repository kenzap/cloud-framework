const { __ } = wp.i18n;
const { Component } = wp.element;
const { RichText, InspectorControls, PanelColorSettings, InnerBlocks } = wp.editor;
const { RangeControl, PanelBody } = wp.components;
import { defaultItem, typographyArr, getStyles } from './block';
import { InspectorContainer, ContainerEdit } from '../commonComponents/container/container';
import { TypographyContainer, getTypography } from '../commonComponents/typography/typography';
import { Plus } from '../commonComponents/icons/plus';

/**
 * Keys for new blocks
 * @type {number}
 */
let key = 0;

/**
 * The edit function describes the structure of your block in the context of the editor.
 * This represents what the editor will render when the block is used.
 *
 * The "edit" property must be a valid function.
 * @param {Object} props - attributes
 * @returns {Node} rendered component
 */
export default class Edit extends Component {
    state = {
        activeSubBlock: -1,
    };

    /**
     * Add a new item to list with default fields
     */
    addItem = () => {
        key++;
        this.props.setAttributes( {
            items: [ ...this.props.attributes.items, {
                ...defaultItem,
                title: defaultItem.title + ' ' + ( key ),
                key: 'new ' + new Date().getTime(),
            } ],
        } );
        setTimeout( () => {
            const element = document.querySelector( '.kenzap-timeline-3 .owl-stage' );
            element.scrollLeft = element.scrollWidth;
        } );
    };

    /**
     * Change any property of item
     * @param {string} property - editable field
     * @param {string} value - for field
     * @param {number} index - of items array
     * @param {boolean} withMutation - in some cases we should avoid mutation for force rerender component
     */
    onChangePropertyItem = ( property, value, index, withMutation = false ) => {
        const items = withMutation ? [ ...this.props.attributes.items ] : this.props.attributes.items;
        if ( ! items[ index ] || typeof items[ index ][ property ] !== 'string' ) {
            return;
        }
        items[ index ][ property ] = value;
        this.props.setAttributes( { items: items } );
    };

    /**
     * Remove item
     * It also add default item if we remove all elements from array
     * @param {number} index - of item
     */
    removeItem = ( index ) => {
        const items = [ ...this.props.attributes.items ];
        if ( items.length === 1 ) {
            this.props.setAttributes( { items: [ defaultItem ] } );
        } else {
            items.splice( index, 1 );
            this.props.setAttributes( { items: items } );
        }
    };

    render() {
        const {
            className,
            attributes,
            setAttributes,
            isSelected,
        } = this.props;

        const { vars, kenzapContanerStyles, additionalClassForOwlContainer } = getStyles( attributes );

        return (
            <div>
                <InspectorControls>
                    <PanelBody
                        title={ __( 'General', 'kenzap-timeline' ) }
                        initialOpen={ false }
                    >

                        <PanelColorSettings
                            title={ __( 'Colors', 'kenzap-timeline' ) }
                            initialOpen={ false }
                            colorSettings={ [
                                {
                                    value: attributes.timeLineColor,
                                    onChange: ( timeLineColor ) => {
                                        return setAttributes( { timeLineColor } );
                                    },
                                    label: __( 'Element and circle color', 'kenzap-timeline' ),
                                },
                                {
                                    value: attributes.boxBackground,
                                    onChange: ( boxBackground ) => {
                                        return setAttributes( { boxBackground } );
                                    },
                                    label: __( 'Box background', 'kenzap-timeline' ),
                                },
                            ] }
                        />
                        <RangeControl
                            label={ __( 'Featured', 'kenzap-timeline' ) }
                            value={ attributes.highlightedRecords }
                            onChange={ ( highlightedRecords ) => setAttributes( { highlightedRecords } ) }
                            min={ 0 }
                            max={ attributes.items.length }
                            help={ __( 'Mark how many records are highlighted as featured from the beginning of the timeline.', 'kenzap-timeline' ) }
                        />
                    </PanelBody>

                    <TypographyContainer
                        setAttributes={ setAttributes }
                        typographyArr={ typographyArr }
                        { ...attributes }
                    />

                    <InspectorContainer
                        setAttributes={ setAttributes }
                        { ...attributes }
                        withNested
                        withPadding
                        withWidth100
                        withBackground
                        withAutoPadding
                    />
                </InspectorControls>
                <div className={ className ? className : '' } style={ vars }>
                    <ContainerEdit
                        className={ `kenzap-timeline-3 block-${ attributes.blockUniqId } ${ isSelected ? 'selected' : '' } ` }
                        attributes={ attributes }
                        withBackground
                        withPadding
                    >
                        <div className="kenzap-container" style={ kenzapContanerStyles }>
                            { attributes.nestedBlocks == 'top' && <InnerBlocks /> }
                            <div className={ `timeline owl-carousel owl-loaded ${ additionalClassForOwlContainer }` }>
                                <div className="owl-stage-outer">
                                    <div className="owl-stage">
                                        { attributes.items && attributes.items.map( ( item, index ) => (
                                            <div className="owl-item" key={ item.key }>
                                                <div
                                                    key={ item.key }
                                                    className={ `timeline-content ${ attributes.highlightedRecords > index ? 'past-time' : '' } ${ attributes.highlightedRecords == index+1 ? 'past-time-last' : '' }` }
                                                >
                                                    <button className="remove" onClick={ () => this.removeItem( index ) }>
                                                        <span className="dashicons dashicons-no" />
                                                    </button>

                                                    <div className="time-wrapper">
                                                        <div className="time" >
                                                            <RichText
                                                                tagName="p"
                                                                placeholder={ __( 'Date', 'kenzap-timeline' ) }
                                                                value={ item.time }
                                                                onChange={ ( value ) => this.onChangePropertyItem( 'time', value, index, true ) }
                                                                style={ getTypography( attributes, 0 ) }
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="info-wrapper">
                                                        <div className="info">
                                                            <RichText
                                                                tagName="h3"
                                                                placeholder={ __( 'Title', 'kenzap-timeline' ) }
                                                                value={ item.title }
                                                                onChange={ ( value ) => this.onChangePropertyItem( 'title', value, index, true ) }
                                                                style={ getTypography( attributes, 1 ) }
                                                            />
                                                            <RichText
                                                                tagName="p"
                                                                placeholder={ __( 'Description', 'kenzap-timeline' ) }
                                                                value={ item.description }
                                                                onChange={ ( value ) => this.onChangePropertyItem( 'description', value, index, true ) }
                                                                style={ getTypography( attributes, 2 ) }
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ) ) }
                                    </div>
                                </div>
                            </div>
                            { attributes.nestedBlocks == 'bottom' && <InnerBlocks /> }
                        </div>
                        <div className="editPadding" />
                        <button
                            className="addWhite"
                            onClick={ this.addItem }>
                            <span><Plus /></span>{ __( 'Add new event', 'kenzap-timeline' ) }
                        </button>
                    </ContainerEdit>
                </div>
            </div>
        );
    }
}
