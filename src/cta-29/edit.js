const { __ } = wp.i18n; 
const { Component } = wp.element;
const { RichText, InspectorControls, PanelColorSettings, InnerBlocks } = wp.editor;
const { RangeControl, PanelBody, CheckboxControl } = wp.components;
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
            const element = document.querySelector( '.kenzap-timeline-4 .owl-stage' );
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
                        <CheckboxControl
                            label={__( 'Hover animation', 'kenzap-timeline' )}
                            checked={ attributes.withAnimation }
                            onChange={ ( withAnimation ) => {
                                setAttributes( { withAnimation } );
                            } }
                        />

                        <RangeControl
                            label={ __( 'Border radius event', 'kenzap-timeline' ) }
                            value={ attributes.borderRadius }
                            onChange={ ( borderRadius ) => setAttributes( { borderRadius } ) }
                            min={ 0 }
                            max={ 60 }
                        />

                        <PanelColorSettings
                            title={ __( 'Colors', 'kenzap-timeline' ) }
                            initialOpen={ false }
                            colorSettings={ [
                                {
                                    value: attributes.textColor,
                                    onChange: ( value ) => {
                                        return setAttributes( { textColor: value } );
                                    },
                                    label: __( 'Featured', 'kenzap-timeline' ),
                                },
                            ] }
                        />
                        <RangeControl
                            label={ __( 'Featured element', 'kenzap-timeline' ) }
                            value={ attributes.activeRecord }
                            onChange={ ( activeRecord ) => setAttributes( { activeRecord } ) }
                            min={ 1 }
                            max={ attributes.items.length }
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
                        className={ `kenzap-timeline-4 ${ attributes.withAnimation ? 'kp-animate' : '' } block-${ attributes.blockUniqId } ${ isSelected ? 'selected' : '' } ` }
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
                                                    className={ `timeline-content ${ index + 1 === attributes.activeRecord ? 'current-time' : '' } ` }
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
