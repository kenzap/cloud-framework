const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const { RichText, InspectorControls, MediaUpload, InnerBlocks } = wp.editor;
const { RangeControl, PanelBody, TextControl, ToggleControl, RadioControl, Button } = wp.components;
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
                            label={ __( 'Sections', 'kenzap-cta' ) }
                            value={ attributes.elements }
                            onChange={ ( elements ) => {
                                this.updateItems( 'elements', elements );
                            } }
                            min={ 1 }
                            max={ 8 }
                            help={ __( 'Amount of sections to display.', 'kenzap-cta' ) }
                        />

                        <ToggleControl
                            label={ __( 'Scroll animation', 'kenzap-cta' ) }
                            checked={ attributes.scrollAnime }
                            onChange={ ( scrollAnime ) => setAttributes( { scrollAnime } ) }
                            help={ __( 'Can be previewed on frontend only.', 'kenzap-cta' ) }
                        />

                    </PanelBody>
                    
                    <PanelBody
                        title={ __( 'Sections', 'kenzap-cta' ) }
                        initialOpen={ true }
                        >
                        
                            { attributes.items && attributes.items.map( ( item, index ) => (

                                <PanelBody
                                    title={ (index+1 ) + ". " +  __( 'Section', 'kenzap-cta' ) }
                                    initialOpen={ false }
                                    >

                                    <RadioControl
                                        label={ __( 'Orientation', 'kenzap-cta' ) }
                                        selected={ item.side }
                                        options={ [
                                            { label: __( 'Left', 'kenzap-cta' ), value: 'left' },
                                            { label: __( 'Right', 'kenzap-cta' ), value: 'right' },
                                        ] }
                                        onChange={ ( value ) => {
                                            this.onChangePropertyItem( 'side', value, index, true );
                                        } }
                                    />

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

                                    <p style={ { marginBottom: '5px' } }>{ __( '#1 Image', 'kenzap-cta' ) }</p>
                                    <MediaUpload
                                        onSelect={ ( media ) => {
                                            this.onChangePropertyItem( 'img1', media.sizes['kp_l']?media.sizes['kp_l']['url']:media.url, index, true );
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

                                    <p style={ { marginBottom: '5px' } }>{ __( '#2 Image', 'kenzap-cta' ) }</p>
                                    <MediaUpload
                                        onSelect={ ( media ) => {
                                            this.onChangePropertyItem( 'img2', media.sizes['kp_m']?media.sizes['kp_m']['url']:media.url, index, true );
                                        } }
                                        value={ item.img2 }
                                        allowedTypes={ [ 'image' ] }
                                        render={ ( mediaUploadProps ) => (

                                        <Fragment>
                                            { ( item.img2 !== 'none' ) ? (
                                                <Fragment>
                                                    <Button
                                                        isDefault
                                                        onClick={ () => { 
                                                            this.onChangePropertyItem( 'img2', 'none', index, true ); 
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
                                                            backgroundImage: `url(${ [ item.img2 ? uo(item.img2) : '' ] })`,
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

                                    <p style={ { marginBottom: '5px' } }>{ __( '#3 Image', 'kenzap-cta' ) }</p>
                                    <MediaUpload
                                        onSelect={ ( media ) => {
                                            this.onChangePropertyItem( 'img3', media.sizes['kp_m']?media.sizes['kp_m']['url']:media.url, index, true );
                                        } }
                                        value={ item.img3 }
                                        allowedTypes={ [ 'image' ] }
                                        render={ ( mediaUploadProps ) => (

                                        <Fragment>
                                            { ( item.img3 !== 'none' ) ? (
                                                <Fragment>
                                                    <Button
                                                        isDefault
                                                        onClick={ () => { 
                                                            this.onChangePropertyItem( 'img3', 'none', index, true ); 
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
                                                            backgroundImage: `url(${ [ item.img3 ? uo(item.img3) : '' ] })`,
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

                                </PanelBody>

                            ) ) }

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
                        className={ `kpinf3 block-${ attributes.blockUniqId } ${ isSelected ? 'selected' : '' } ` }
                        attributes={ attributes }
                        withBackground
                        withPadding
                        >
 
                        <div className="kenzap-container" style={ kenzapContanerStyles }>
                            { attributes.nestedBlocks == 'top' && <InnerBlocks /> }
                            { attributes.items && attributes.items.map( ( item, index ) => (

                                <div className={ `info-box kp-${ item.side }` } >
                                    
                                    { item.side == 'left' &&
                                    <div class="kenzap-row">
                                        <div class="kenzap-col-6">
                                            <div className={ `kp-img ${ item.img2=='none' && item.img3=='none' ? 'kp-img100':'' }` } >
                                                { item.img1!='none' && <div class="kp-img-1 "
                                                    data-paroller-factor="0.1" 
                                                    data-paroller-factor-xs="0.0"    
                                                    data-paroller-factor-sm="0.0"  
                                                    data-paroller-factor-md="0.0"  
                                                    data-paroller-type="foreground"     
                                                    data-paroller-direction="vertical"
                                                    data-paroller-transition="all 0.8s ease-in">
                                                    <img src={ uo(item.img1) } alt="image" />
                                                </div> }
                                                { item.img2!='none' && <div class="kp-img-2 "
                                                    data-paroller-factor="-0.1" 
                                                    data-paroller-factor-xs="0.0"    
                                                    data-paroller-factor-sm="0.0"  
                                                    data-paroller-factor-md="0.0"  
                                                    data-paroller-type="foreground"     
                                                    data-paroller-direction="vertical"
                                                    data-paroller-transition="all 0.8s ease-in">
                                                    <img src={ uo(item.img2) } alt="image" />
                                                </div> } 
                                                { item.img3!='none' && <div class="kp-img-3 "
                                                    data-paroller-factor="0.1" 
                                                    data-paroller-factor-xs="0.0"    
                                                    data-paroller-factor-sm="0.0"  
                                                    data-paroller-factor-md="0.0"  
                                                    data-paroller-type="foreground"     
                                                    data-paroller-direction="vertical"
                                                    data-paroller-transition="all 0.8s ease-in">
                                                    <img src={ uo(item.img3) } alt="image" />
                                                </div> }
                                            </div>
                                        </div>

                                        <div class="kenzap-col-6">
                                            <div class="kp-content " 
                                                data-paroller-factor="-0.1" 
                                                data-paroller-factor-xs="0.0"    
                                                data-paroller-factor-sm="0.0"  
                                                data-paroller-factor-md="0.0"  
                                                data-paroller-type="foreground"     
                                                data-paroller-direction="vertical"
                                                data-paroller-transition="all 0.8s ease-in">

                                                <RichText
                                                    tagName="h2"
                                                    className="kp-h2"
                                                    value={ item.title }
                                                    placeholder={ __( 'Title', 'kenzap-cta' ) }
                                                    onChange={ ( value ) => {
                                                        this.onChangePropertyItem( 'title', value, index, true );
                                                    } }
                                                    style={ getTypography( attributes, 0 ) } 
                                                    />

                                                <RichText
                                                    tagName="p"
                                                    className="kp-p"
                                                    value={ item.description }
                                                    placeholder={ __( 'Description', 'kenzap-cta' ) }
                                                    onChange={ ( value ) => {
                                                        this.onChangePropertyItem( 'description', value, index, true );
                                                    } }
                                                    style={ getTypography( attributes, 1 ) } 
                                                    />

                                                { item.btn && <a 
                                                    target={ item.linkn ? '_blank':'' }
                                                    className="bt2"
                                                    style={ getTypography( attributes, 2 ) } 
                                                    rel="noopener noreferrer"
                                                    href={ item.link } >{ item.btn }</a> 
                                                }
                                            </div>
                                        </div>
                                    </div> }

                                    { item.side == 'right' &&
                                    <div class="kenzap-row">

                                        <div class="kenzap-col-6">
                                            <div class="kp-content " 
                                                data-paroller-factor="-0.1" 
                                                data-paroller-factor-xs="0.0"    
                                                data-paroller-factor-sm="0.0"  
                                                data-paroller-factor-md="0.0"  
                                                data-paroller-type="foreground"     
                                                data-paroller-direction="vertical"
                                                data-paroller-transition="all 0.8s ease-in">

                                                <RichText
                                                    tagName="h2"
                                                    className="kp-h2"
                                                    value={ item.title }
                                                    placeholder={ __( 'Title', 'kenzap-cta' ) }
                                                    onChange={ ( value ) => {
                                                        this.onChangePropertyItem( 'title', value, index, true );
                                                    } }
                                                    style={ getTypography( attributes, 0 ) } 
                                                    />

                                                <RichText
                                                    tagName="p"
                                                    className="kp-p"
                                                    value={ item.description }
                                                    placeholder={ __( 'Description', 'kenzap-cta' ) }
                                                    onChange={ ( value ) => {
                                                        this.onChangePropertyItem( 'description', value, index, true );
                                                    } }
                                                    style={ getTypography( attributes, 1 ) } 
                                                    />

                                                { item.btn && <a 
                                                    target={ item.linkn ? '_blank':'' }
                                                    className="bt2"
                                                    style={ getTypography( attributes, 2 ) } 
                                                    rel="noopener noreferrer"
                                                    href={ item.link } >{ item.btn }</a> 
                                                }
                                            </div>
                                        </div>

                                        <div class="kenzap-col-6">
                                            <div className={ `kp-img ${ item.img2=='none' && item.img3=='none' ? 'kp-img100':'' }` } >
                                                { item.img1!='none' && <div class="kp-img-1 "
                                                    data-paroller-factor="0.1" 
                                                    data-paroller-factor-xs="0.0"    
                                                    data-paroller-factor-sm="0.0"  
                                                    data-paroller-factor-md="0.0"  
                                                    data-paroller-type="foreground"     
                                                    data-paroller-direction="vertical"
                                                    data-paroller-transition="all 0.8s ease-in">
                                                    <img src={ uo(item.img1) } alt="image" />
                                                </div> }
                                                { item.img2!='none' && <div class="kp-img-2 "
                                                    data-paroller-factor="-0.1" 
                                                    data-paroller-factor-xs="0.0"    
                                                    data-paroller-factor-sm="0.0"  
                                                    data-paroller-factor-md="0.0"  
                                                    data-paroller-type="foreground"     
                                                    data-paroller-direction="vertical"
                                                    data-paroller-transition="all 0.8s ease-in">
                                                    <img src={ uo(item.img2) } alt="image" />
                                                </div> } 
                                                { item.img3!='none' && <div class="kp-img-3 "
                                                    data-paroller-factor="0.1" 
                                                    data-paroller-factor-xs="0.0"    
                                                    data-paroller-factor-sm="0.0"  
                                                    data-paroller-factor-md="0.0"  
                                                    data-paroller-type="foreground"     
                                                    data-paroller-direction="vertical"
                                                    data-paroller-transition="all 0.8s ease-in">
                                                    <img src={ uo(item.img3) } alt="image" />
                                                </div> }
                                            </div>
                                        </div>
                                        
                                    </div> }

                                </div>

                            ) ) }
                            { attributes.nestedBlocks == 'bottom' && <InnerBlocks /> }
                        </div>
                    </ContainerEdit>
                </div>
            </div>
        );
    }
}
