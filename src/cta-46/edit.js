
const { __ } = wp.i18n;
const { Component } = wp.element;
const { RichText, InspectorControls, PanelColorSettings, InnerBlocks } = wp.editor;
const { RangeControl, PanelBody, Popover, TextControl, ToggleControl, Button, ButtonGroup, BaseControl } = wp.components;
import { getStyles, typographyArr } from './block';
import { InspectorContainer, ContainerEdit } from '../commonComponents/container/container';
import { TypographyContainer, getTypography } from '../commonComponents/typography/typography';

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
        isButtonPopupVisibleIndex: -1,
        activePeriod: 'monthly',
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
                        { attributes.isFilterShow &&
                        <BaseControl
                            label={ __( 'Table type', 'kenzap-pricing' ) }
                        >
                            <ButtonGroup>
                                <Button
                                    isDefault
                                    isPrimary={ this.state.activePeriod === 'monthly' }
                                    onClick={ () => this.setState( { activePeriod: 'monthly' } ) }
                                >
                                    { attributes.tableTypes.individual }
                                </Button>
                                <Button
                                    isDefault
                                    isPrimary={ this.state.activePeriod === 'yearly' }
                                    onClick={ () => this.setState( { activePeriod: 'yearly' } ) }
                                >
                                    { attributes.tableTypes.business }
                                </Button>
                            </ButtonGroup>
                        </BaseControl>
                        }

                        <RangeControl
                            label={ __( 'Table Border', 'kenzap-pricing' ) }
                            value={ attributes.cardBorderRadius }
                            onChange={ ( cardBorderRadius ) => setAttributes( { cardBorderRadius } ) }
                            min={ 0 }
                            max={ 100 }
                        />

                    </PanelBody>

                    <PanelColorSettings
                        title={ __( 'Colors', 'kenzap-pricing' ) }
                        initialOpen={ false }
                        colorSettings={ [
                            {
                                value: attributes.cardBackgroundColor,
                                onChange: ( cardBackgroundColor ) => {
                                    return setAttributes( { cardBackgroundColor } );
                                },
                                label: __( 'Table', 'kenzap-pricing' ),
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
                        className={ `kenzap-pricing-4 block-${ attributes.blockUniqId } block-${ attributes.blockUniqId } ${ isSelected ? 'selected' : '' } ` }
                        attributes={ attributes }
                        withBackground
                        withPadding
                    >
                        <div className="kenzap-container" style={ kenzapContanerStyles }>
                            { attributes.nestedBlocks == 'top' && <InnerBlocks /> }
                            <div className="kp-pricing-table">
                                <div className="kenzap-row">
                                    <div className="kenzap-col-6">
                                        <h2
                                            style={ { ...getTypography( attributes, 1, "margin-top" ), ...getTypography( attributes, 1, "margin-bottom" ) } }
                                            >
                                            <RichText
                                                tagName="div"
                                                placeholder={ __( 'Organization', 'kenzap-pricing' ) }
                                                value={ attributes.organization }
                                                onChange={ ( organization ) => setAttributes( { organization } ) }
                                                className="organization"
                                                style={ getTypography( attributes, 0 ) }
                                            />
                                            <RichText
                                                tagName="span"
                                                placeholder={ __( 'Title', 'kenzap-pricing' ) }
                                                value={ attributes.title }
                                                onChange={ ( title ) => setAttributes( { title } ) }
                                                style={ getTypography( attributes, 1 ) }
                                            />
                                        </h2>
                                        <RichText
                                            tagName="p"
                                            placeholder={ __( 'Description', 'kenzap-pricing' ) }
                                            value={ attributes.description }
                                            onChange={ ( description ) => setAttributes( { description } ) }
                                            style={ getTypography( attributes, 2 ) }
                                        />
                                        { attributes.isFilterShow &&
                                        <div className="tabs-nav">
                                            <ul>
                                                <li className={ `${ this.state.activePeriod === 'monthly' ? 'active' : '' }` }>
                                                    <a
                                                        href="#"
                                                        style={ getTypography( attributes, 3 ) }
                                                    >
                                                        <input
                                                            value={ attributes.tableTypes.individual }
                                                            onChange={ ( e ) => {
                                                                const value = e.target.value;
                                                                const items = { ...attributes.tableTypes };
                                                                items.individual = value;
                                                                setAttributes( { tableTypes: items } );
                                                            } }
                                                            placeholder={ __( 'Current table', 'kenzap-pricing' ) }
                                                            style={ {
                                                                width: ( attributes.tableTypes.individual.length === 0 ? 10 : attributes.tableTypes.individual.length ) * 10,
                                                            } }
                                                        />
                                                    </a>
                                                </li>
                                                <li className={ `${ this.state.activePeriod === 'yearly' ? 'active' : '' }` }>
                                                    <a
                                                        href="#"
                                                        style={ getTypography( attributes, 3 ) }
                                                    >
                                                        <input
                                                            value={ attributes.tableTypes.business }
                                                            onChange={ ( e ) => {
                                                                const value = e.target.value;
                                                                const items = { ...attributes.tableTypes };
                                                                items.business = value;
                                                                setAttributes( { tableTypes: items } );
                                                            } }
                                                            placeholder={ __( 'Table type', 'kenzap-pricing' ) }
                                                            style={ {
                                                                width: ( attributes.tableTypes.business.length === 0 ? 10 : attributes.tableTypes.business.length ) * 10,
                                                            } }
                                                        />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        }
                                    </div>
                                    <div className="kenzap-col-6">
                                        <div className="tabs-content">
                                            { attributes.items && attributes.items.map( ( item, index ) => (
                                                <div
                                                    key={ item.key }
                                                    className={ `tab-content ${ item.id === this.state.activePeriod ? 'active' : '' } ` }
                                                >
                                                    <div
                                                        className="pricing-box"
                                                        style={ {
                                                            background: attributes.cardBackgroundColor,
                                                            borderRadius: attributes.cardBorderRadius,
                                                        } }
                                                    >
                                                        <h3>
                                                            <RichText
                                                                tagName="span"
                                                                placeholder={ __( 'Title', 'kenzap-pricing' ) }
                                                                value={ item.title }
                                                                onChange={ ( value ) => this.onChangePropertyItem( 'title', value, index, true ) }
                                                                style={ getTypography( attributes, 4 ) }
                                                            />
                                                            <RichText
                                                                tagName="span"
                                                                placeholder={ __( 'Period', 'kenzap-pricing' ) }
                                                                value={ item.period }
                                                                onChange={ ( value ) => this.onChangePropertyItem( 'period', value, index, true ) }
                                                                className="period"
                                                                style={ getTypography( attributes, 5 ) }
                                                            />
                                                        </h3>

                                                        <strong
                                                            style={ {
                                                                color: attributes.textColor,
                                                                lineHeight: 1.25,
                                                            } }
                                                            className="kp-price"
                                                        >
                                                            <input
                                                                value={ item.price }
                                                                onChange={ ( event ) => {
                                                                    const value = event.target.value;
                                                                    this.onChangePropertyItem( 'price', value, index, true );
                                                                } }
                                                                placeholder={ __( '$86', 'kenzap-pricing' ) }
                                                                style={ { ...getTypography( attributes, 6 ), "width": `${ ( item.price.length === 0 ? 3 : item.price.length ) * 40 }px` } }
                                                            />
                                                            <sup>
                                                                <input
                                                                    value={ item.cents }
                                                                    onChange={ ( event ) => {
                                                                        const value = event.target.value;
                                                                        this.onChangePropertyItem( 'cents', value, index, true );
                                                                    } }
                                                                    placeholder={ __( '.99', 'kenzap-pricing' ) }
                                                                    style={ { ...getTypography( attributes, 7 ), "width": `${ ( item.price.length === 0 ? 3 : item.price.length ) * 23 }px` } }
                                                                />
                                                            </sup>
                                                        </strong>
                                                        <RichText
                                                            tagName="ul"
                                                            placeholder={ __( 'Description', 'kenzap-pricing' ) }
                                                            value={ item.subDescription }
                                                            onChange={ ( value ) => this.onChangePropertyItem( 'subDescription', value, index, true ) }
                                                            multiline="li"
                                                            style={ getTypography( attributes, 8 ) }
                                                        />
                                                        <a
                                                            onClick={ () => this.setState( { isButtonPopupVisibleIndex: index } ) }
                                                            className="kp-link"
                                                            style={ getTypography( attributes, 9 ) }
                                                            rel="noopener noreferrer"
                                                        >
                                                            <input
                                                                value={ item.ctaText }
                                                                onChange={ ( event ) => {
                                                                    const value = event.target.value;
                                                                    this.onChangePropertyItem( 'ctaText', value, index, true );
                                                                } }
                                                                placeholder={ __( 'GET NOW', 'kenzap-pricing' ) }
                                                                style={ {
                                                                    width: `${ ( item.ctaText.length === 0 ? 7 : item.ctaText.length ) * 11 }px`,
                                                                } }
                                                            />
                                                            { this.state.isButtonPopupVisibleIndex === index &&
                                                            <Popover
                                                                onClickOutside={ () => this.setState( { isButtonPopupVisibleIndex: -1 } ) }
                                                                focusOnMount={ false }
                                                                className="link-popover"
                                                            >
                                                                <TextControl
                                                                    label={ __( 'Specify Link', 'kenzap-pricing' ) }
                                                                    placeholder={ __( 'http://www.example.com', 'kenzap-pricing' ) }
                                                                    value={ item.ctaUrl }
                                                                    className="link-text"
                                                                    onChange={ ( value ) => {
                                                                        this.onChangePropertyItem( 'ctaUrl', value, index, true );
                                                                    } }
                                                                />
                                                                <ToggleControl
                                                                    label={ __( 'Settings' ) }
                                                                    help={ item.ctaUrlTarget ? __( 'Open link in new window.', 'kenzap-pricing' ) : __( 'Open link in current window', 'kenzap-pricing' ) }
                                                                    checked={ item.ctaUrlTarget }
                                                                    onChange={ ( value ) => {
                                                                        this.onChangePropertyItem( 'ctaUrlTarget', value, index, true );
                                                                    } }
                                                                />
                                                            </Popover>
                                                            }
                                                        </a>
                                                    </div>
                                                </div>
                                            ) ) }
                                        </div>
                                    </div>
                                </div>
                            </div>
                            { attributes.nestedBlocks == 'bottom' && <InnerBlocks /> }
                        </div>
                    </ContainerEdit>
                </div>
            </div>
        );
    }
}
