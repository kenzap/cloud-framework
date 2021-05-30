const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const { RichText, InspectorControls, PanelColorSettings, MediaUpload, InnerBlocks } = wp.editor;
const { RangeControl, PanelBody, TextControl, ToggleControl, Button } = wp.components;
import { defaultItem, getStyles, typographyArr } from './block';
import { InspectorContainer, ContainerEdit, uo } from '../commonComponents/container/container';
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

            this.props.setAttributes( { backgroundColor: '#23282d' } );
            this.props.setAttributes( { containerPadding: 55 } );
            this.props.setAttributes( { isFirstLoad: false } );
        }

        return (
            <div>
                <InspectorControls>
                    <PanelBody
                        title={ __( 'General', 'kenzap-cta' ) }
                        initialOpen={ false }
                        >
                            
                        <RangeControl
                            label={ __( 'Elements', 'kenzap-cta' ) }
                            value={ attributes.elements }
                            onChange={ ( elements ) => {
                                this.updateItems( 'elements', elements );
                            } }
                            min={ 1 }
                            max={ 3 }
                            help={ __( 'Number of questions and answers to display.', 'kenzap-cta' ) }
                        />
                        
                        <PanelColorSettings
                            title={ __( 'Colors', 'kenzap-cta' ) }
                            initialOpen={ false }
                            colorSettings={ [
                                {
                                    value: attributes.textColor2,
                                    onChange: ( value ) => {
                                        return setAttributes( { textColor2: value } );
                                    },
                                    label: __( 'Icons', 'kenzap-cta' ),
                                },
                            ] }
                        />

                    </PanelBody>

                    <TypographyContainer
                        setAttributes={ setAttributes }
                        typographyArr={ typographyArr }
                        { ...attributes }
                    />
                    
                    <PanelBody
                        title={ __( 'Elements', 'kenzap-cta' ) }
                        initialOpen={ true }
                        >
                        
                            { attributes.items && attributes.items.map( ( item, index ) => (

                                <PanelBody
                                    title={ (index+1 ) + ". " +  __( 'Element', 'kenzap-cta' ) }
                                    initialOpen={ false }
                                    >

                                    <TextControl
                                        label={ __( 'Link', 'kenzap-cta' ) + " " + (index+1) }
                                        value={ item.link }
                                        onChange={ ( value ) => {
                                            this.onChangePropertyItem( 'link', value, index, true );
                                        } }
                                    />

                                    <ToggleControl
                                        label={ __( 'New window', 'kenzap-cta' ) }
                                        checked={ JSON.parse(item.linkn) }
                                        onChange={ ( value ) => {
                                            this.onChangePropertyItem( 'linkn', value, index, true );
                                        } }
                                    />

                                    <TextControl
                                        label={ __( 'Button text', 'kenzap-cta' ) + " " + (index+1) }
                                        value={ item.btn }
                                        onChange={ ( value ) => {
                                            this.onChangePropertyItem( 'btn', value, index, true );
                                        } }
                                    />

                                    <p style={ { marginBottom: '5px' } }>{ __( 'Icon', 'kenzap-cta' ) }</p>
                                    <MediaUpload
                                        onSelect={ ( media ) => {
                                            this.onChangePropertyItem( 'img1', media.url, index, true );
                                            this.onChangePropertyItem( 'alt', media.alt, index, true );
                                        } }
                                        value={ item.img1 }
                                        allowedTypes={ [ 'image' ] }
                                        render={ ( mediaUploadProps ) => (

                                        <Fragment>
                                            { ( item.img1 !== 'none' ) ? (
                                                <Fragment>
                                                    <Button
                                                        isDefault
                                                        onClick={ () => { 
                                                            this.onChangePropertyItem( 'img1', 'none', index, true ); 
                                                        } }
                                                    >
                                                    { __( 'Remove', 'kenzap-cta' ) }
                                                    </Button>
                                                    <div
                                                        style={ {
                                                            width: '27px',
                                                            height: '27px',
                                                            display: 'inline-block',
                                                            margin: '0 0 8px 5px',
                                                            backgroundImage: `url(${ [ item.img1 ? uo(item.img1) : '' ] })`,
                                                            backgroundRepeat: 'no-repeat',
                                                            backgroundSize: 'cover',
                                                        } }
                                                    />

                                                </Fragment>
                                            ) : (
                                                <Button isDefault onClick={ mediaUploadProps.open } style={ { margin: '0 0 8px 0px', } }>
                                                    { __( 'Upload/Choose', 'kenzap-cta' ) }
                                                </Button>
                                            ) }
                                        </Fragment>

                                        ) }
                                    />

                                    <ToggleControl
                                        label={ __( 'Apply color', 'kenzap-cta' ) }
                                        checked={ JSON.parse(item.img1c) }
                                        onChange={ ( value ) => {
                                            this.onChangePropertyItem( 'img1c', value, index, true );
                                        } }
                                        help={ __( 'Try to change color of the image. Works with SVG format only. Preview on frontend.', 'kenzap-cta' ) }
                                    />

                                </PanelBody>

                            ) ) }

                    </PanelBody>

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
                    
                <div id={ attributes.anchor } className={ className ? className : '' } style={ vars } >
                    <ContainerEdit
                        className={ `kpinf5 block-${ attributes.blockUniqId } ${ isSelected ? 'selected' : '' } ` }
                        attributes={ attributes }
                        withBackground
                        withPadding
                        >
 
                        <div className="kenzap-container" style={ kenzapContanerStyles }>
                            { attributes.nestedBlocks == 'top' && <InnerBlocks /> }
                            <div class="kenzap-row">

                                <div class="kenzap-col-3">
                                    <div class="info-box">
                                        <div class="kp-content">
                                        <RichText
                                            tagName="h3"
                                            className="kp-h3"
                                            value={ attributes.title }
                                            placeholder={ __( 'Title', 'kenzap-cta' ) }
                                            onChange={ ( title ) => setAttributes( { title } ) }
                                            style={ getTypography( attributes, 0 ) }
                                            />
                                        </div>
                                    </div>
                                </div>

                                { attributes.items && attributes.items.map( ( item, index ) => (

                                    <div class="kenzap-col-3">
                                        <div class="info-box">
                                            <div class="kp-img" >
                                                <div className={ JSON.parse(item.img1c) ? 'mask':'img' }></div>
                                            </div>
                                            <div class="kp-content">
                                                { item.btn && <a 
                                                target={ item.linkn ? '_blank':'_self' }
                                                style={ getTypography( attributes, 1 ) }
                                                rel="noopener noreferrer"
                                                href={ item.link }>{ item.btn }</a> }
                                            </div>
                                        </div>
                                    </div> 

                                ) ) }

                            </div>
                            { attributes.nestedBlocks == 'bottom' && <InnerBlocks /> }
                        </div>
                    </ContainerEdit>
                </div>
            </div>
        );
    }
}
