const { __ } = wp.i18n;
const { Component } = wp.element;
const { RichText, InspectorControls, PanelColorSettings, InnerBlocks } = wp.editor;
const { RangeControl, PanelBody, ToggleControl, RadioControl } = wp.components;
import { defaultItem, getStyles, typographyArr } from './block';
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

    /**
     * Change any property of item
     * @param {string} property - editable field
     * @param {string} value - for field
     * @param {number} index - of items array
     * @param {boolean} withMutation - in some cases we should avoid mutation for force rerender component
     */
    onChangePropertyItem = ( property, value, index, withMutation = false ) => {
        const items = withMutation ? [ ...this.props.attributes.items ] : this.props.attributes.items;
        items[ index ][ property ] = value+"";
        this.props.setAttributes( { items: items } );
        this.props.setAttributes( { randomValue: new Date().getTime()+"" } );
    };

    /**
     * Change any property of item
     * @param {string} el - key of items attributes array
     * @param {string} value -  value of editable field
     */
    updateItems = ( el, value ) => {

        const items = [ ...this.props.attributes.items ];

        //add elements to item array
        if(value > items.length){

            this.props.setAttributes( {
                items: [ ...this.props.attributes.items, {
                    ...defaultItem,
                    title: defaultItem.title,
                    description: defaultItem.description,
                    key: 'new ' + new Date().getTime(),
                } ],
            } );
        }

        //remove elements from item array
        if(value < items.length){
    
            if ( items.length === 1 ) {
                this.props.setAttributes( { items: [ defaultItem ] } );
            } else {
                items.splice( items.length-1, 1 );
                this.props.setAttributes( { items: items } );
            }
        }

        this.props.setAttributes( { "elements": value } );

    };

    render() {
        const {
            className,
            attributes,
            setAttributes,
            isSelected,
        } = this.props;

        const { vars, kenzapContanerStyles } = getStyles( attributes );

        if(attributes.isFirstLoad){

            this.props.setAttributes( { backgroundColor: 'transparent' } );
            this.props.setAttributes( { isFirstLoad: false } );
        }

        return (
            <div>
                <InspectorControls>
                    <PanelBody
                        title={ __( 'General', 'kenzap-cta' ) }
                        initialOpen={ false }
                        >

                        <RadioControl
                            label={ __( 'Columns', 'kenzap-cta' ) }
                            selected={ attributes.columns }
                            options={ [
                                { label: __( 'One', 'kenzap-cta' ), value: 'one' },
                                { label: __( 'Two', 'kenzap-cta' ), value: 'two' },
                            ] }
                            onChange={ ( columns ) => setAttributes( { columns } ) }
                            help={ __( 'Available in desktop mode only.', 'kenzap-cta' ) }
                        />
                                    
                        <RangeControl
                            label={ __( 'Elements', 'kenzap-cta' ) }
                            value={ attributes.elements }
                            onChange={ ( elements ) => {
                                this.updateItems( 'elements', elements );
                            } }
                            min={ 1 }
                            max={ 25 }
                            help={ __( 'Number of questions and answers to display.', 'kenzap-cta' ) }
                        />

                        <RangeControl
                            label={ __( 'Border visibility', 'kenzap-cta' ) }
                            value={ attributes.borderTrans }
                            onChange={ ( borderTrans ) => setAttributes( { borderTrans } ) }
                            min={ 1 }
                            max={ 100 }
                            help={ __( 'Adjust border transparency between elements.', 'kenzap-cta' ) }
                        />

                        <ToggleControl
                            label={ __( 'First open', 'kenzap-cta' ) }
                            checked={ attributes.openFirst }
                            onChange={ ( openFirst ) => setAttributes( { openFirst } ) }
                            help={ __( 'Specify if first question is opened on page load.', 'kenzap-cta' ) }
                        />

                        <PanelColorSettings
                            title={ __( 'Colors', 'kenzap-cta' ) }
                            initialOpen={ false }
                            colorSettings={ [
                                {
                                    value: attributes.textColor,
                                    onChange: ( value ) => {
                                        return setAttributes( { textColor: value } );
                                    },
                                    label: __( 'Plus', 'kenzap-cta' ),
                                },
                                {
                                    value: attributes.textColor3,
                                    onChange: ( value ) => {
                                        return setAttributes( { textColor3: value } );
                                    },
                                    label: __( 'Border', 'kenzap-cta' ),
                                },
                            ] }
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
                        withPadding
                        withWidth100
                        withBackground
                        withAutoPadding
                        withNested
                    />
                    </InspectorControls>
                    
                <div id={ attributes.anchor } className={ className ? className : '' } style={ vars }>
                    <ContainerEdit
                        className={ `kpacc2 block-${ attributes.blockUniqId } ${ isSelected ? 'selected' : '' } ` }
                        attributes={ attributes }
                        withBackground
                        withPadding
                        >
 
                        <div className="kenzap-container" style={ kenzapContanerStyles }>
                            { attributes.nestedBlocks == 'top' && <InnerBlocks /> }
                            <div class="kenzap-row">
                                <ul class="accordion">

                                    { attributes.items && attributes.items.map( ( item, index ) => (

                                        <li>
                                            <a class="toggle active" href="#"><i class="plus"></i>
                                            <span><RichText
                                                    tagName="span"
                                                    className="kp-sp"
                                                    value={ item.title }
                                                    placeholder={ __( 'Question', 'kenzap-cta' ) }
                                                    onChange={ ( value ) => {
                                                        this.onChangePropertyItem( 'title', value, index, true );
                                                    } }
                                                    style={ getTypography( attributes, 0 ) }
                                                /></span>

                                            </a>
                                            <div class="inner show" style={ { display: 'block' } }>
                                                <RichText
                                                    tagName="p"
                                                    className="kp-p"
                                                    value={ item.description }
                                                    placeholder={ __( 'Answer', 'kenzap-cta' ) }
                                                    onChange={ ( value ) => {
                                                        this.onChangePropertyItem( 'description', value, index, true );
                                                    } }
                                                    style={ getTypography( attributes, 1 ) }
                                                />
                                            </div>
                                        </li>
                                            
                                    ) ) }

                                </ul>

                            </div>
                            { attributes.nestedBlocks == 'bottom' && <InnerBlocks /> }
                        </div>
                    </ContainerEdit>
                </div>
            </div>
        );
    }
}
