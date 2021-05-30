const { __ } = wp.i18n; 
const { Component } = wp.element;
const { RichText, InspectorControls, InnerBlocks, PanelColorSettings } = wp.editor;
const { RangeControl, PanelBody, ToggleControl } = wp.components;
import { defaultItem, getStyles, typographyArr } from './block';
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
        if ( ! items[ index ] ) {
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
            this.props.setAttributes( {
                items: [ defaultItem ],
            } );
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

        const { vars, kenzapContanerStyles } = getStyles( attributes );

        return (
            <div>
                <InspectorControls>
                    <PanelBody
                        title={ __( 'General', 'kenzap-pricing' ) }
                        initialOpen={ false }
                    >
                        <ToggleControl
                            label={ __( '2 Columns', 'kenzap-pricing' ) }
                            help={ __( 'Displays items in 2 columns', 'kenzap-pricing' ) }
                            checked={ attributes.isTwoColumn }
                            onChange={ ( isTwoColumn ) => {
                                setAttributes( { isTwoColumn } );
                            } }
                        />
                        <RangeControl
                            label={ __( 'Title Size', 'kenzap-pricing' ) }
                            value={ attributes.titleSize }
                            onChange={ ( titleSize ) => setAttributes( { titleSize } ) }
                            min={ 10 }
                            max={ 130 }
                        />
                        <RangeControl
                            label={ __( 'Description Size', 'kenzap-pricing' ) }
                            value={ attributes.descriptionSize }
                            onChange={ ( descriptionSize ) => setAttributes( { descriptionSize } ) }
                            min={ 10 }
                            max={ 130 }
                        />
                        
                    </PanelBody>

                    <PanelColorSettings
                            title={ __( 'Colors', 'kenzap-pricing' ) }
                            initialOpen={ false }
                            colorSettings={ [
                                {
                                    value: attributes.titleColor,
                                    onChange: ( titleColor ) => {
                                        return setAttributes( { titleColor } );
                                    },
                                    label: __( 'Dots', 'kenzap-pricing' ),
                                },
                            ] }
                    />

                    <TypographyContainer
                        setAttributes={ setAttributes }
                        typographyArr={ typographyArr }
                        { ...attributes }
                    />

                    <InspectorContainer
                        setAttributes={ setAttributes }
                        { ...attributes }
                        withPadding
                        withWidth100
                        withBackground
                        withAutoPadding
                        withNested
                    />
                </InspectorControls>
                <div className={ className ? className : '' } style={ vars }>
                    <ContainerEdit
                        className={ `kenzap-pricing-7 block-${ attributes.blockUniqId } ${ isSelected ? 'selected' : '' } ` }
                        attributes={ attributes }
                        withBackground
                        withPadding
                    >
                        <div className="kenzap-container" style={ kenzapContanerStyles }>
                            { attributes.nestedBlocks == 'top' && <InnerBlocks /> }
                            <div className="kp-pricing-table">
                                { attributes.isTwoColumn ? (
                                    <div className="kenzap-row">
                                        { attributes.items && attributes.items.map( ( item, index ) => (
                                            <div
                                                key={ item.key }
                                                className="kenzap-col-6"
                                                >
                                                <div className="pricing-box">
                                                    <button className="remove" onClick={ () => this.removeItem( index ) }>
                                                        <span className="dashicons dashicons-no" />
                                                    </button>
                                                    <RichText
                                                        tagName="h3"
                                                        placeholder={ __( 'Title', 'kenzap-pricing' ) }
                                                        value={ item.title }
                                                        onChange={ ( value ) => this.onChangePropertyItem( 'title', value, index, true ) }
                                                        style={ getTypography( attributes, 0 ) }
                                                        // style={ {
                                                        //         color: attributes.titleColor,
                                                        //         fontSize: `${ attributes.titleSize }px`,
                                                        //     } }
                                                        />
                                                    <p //style={ { color: attributes.textColor } }
                                                    >
                                                        <RichText
                                                            tagName="span"
                                                            value={ item.description }
                                                            onChange={ ( value ) => this.onChangePropertyItem( 'description', value, index, true ) }
                                                            placeholder={ __( 'Description', 'kenzap-pricing' ) }
                                                            style={ getTypography( attributes, 1 ) }
                                                            // style={ {
                                                            //         color: attributes.textColor,
                                                            //         fontSize: `${ attributes.descriptionSize }px`,
                                                            //         backgroundColor: attributes.backgroundColor,
                                                            //     } }
                                                            />
                                                        <RichText
                                                            tagName="span"
                                                            value={ item.price }
                                                            onChange={ ( value ) => this.onChangePropertyItem( 'price', value, index, true ) }
                                                            placeholder={ __( 'Price', 'kenzap-pricing' ) }
                                                            style={ getTypography( attributes, 2 ) }
                                                            // style={ {
                                                            //         color: attributes.textColor,
                                                            //         fontSize: `${ attributes.descriptionSize }px`,
                                                            //         backgroundColor: attributes.backgroundColor,
                                                            //     } }
                                                            />
                                                    </p>
                                                </div>
                                            </div>
                                            ) ) }
                                    </div>
                                    ) :
                                    attributes.items && attributes.items.map( ( item, index ) => (
                                        <div
                                            className="pricing-box"
                                            key={ item.key }
                                        >
                                            <button className="remove" onClick={ () => this.removeItem( index ) }>
                                                <span className="dashicons dashicons-no" />
                                            </button>
                                            <RichText
                                                tagName="h3"
                                                placeholder={ __( 'Title', 'kenzap-pricing' ) }
                                                value={ item.title }
                                                onChange={ ( value ) => this.onChangePropertyItem( 'title', value, index, true ) }
                                                style={ getTypography( attributes, 0 ) }
                                                // style={ {
                                                //     color: attributes.titleColor,
                                                //     fontSize: `${ attributes.titleSize }px`,
                                                // } }
                                            />
                                            <p //style={ { color: attributes.textColor } }
                                            >
                                                <RichText
                                                    tagName="span"
                                                    value={ item.description }
                                                    onChange={ ( value ) => this.onChangePropertyItem( 'description', value, index, true ) }
                                                    placeholder={ __( 'Description', 'kenzap-pricing' ) }
                                                    style={ getTypography( attributes, 1 ) }
                                                    // style={ {
                                                    //     color: attributes.textColor,
                                                    //     fontSize: `${ attributes.descriptionSize }px`,
                                                    //     backgroundColor: attributes.backgroundColor,
                                                    // } }
                                                />
                                                <RichText
                                                    tagName="span"
                                                    value={ item.price }
                                                    onChange={ ( value ) => this.onChangePropertyItem( 'price', value, index, true ) }
                                                    placeholder={ __( 'Price', 'kenzap-pricing' ) }
                                                    style={ getTypography( attributes, 2 ) }
                                                    // style={ {
                                                    //     color: attributes.textColor,
                                                    //     fontSize: `${ attributes.descriptionSize }px`,
                                                    //     backgroundColor: attributes.backgroundColor,
                                                    // } }
                                                />
                                            </p>
                                        </div>
                                    ) )
                                }
                            </div>
                            { attributes.nestedBlocks == 'bottom' && <InnerBlocks /> }
                        </div>
                        <div className="editPadding" />
                        <button
                            className="addWhite"
                            onClick={ this.addItem }>
                            <span><Plus /></span>{ __( 'Add new price block', 'kenzap-pricing' ) }
                        </button>
                    </ContainerEdit>
                </div>
            </div>
        );
    }
}
