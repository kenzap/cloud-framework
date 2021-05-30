const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const { RichText, InspectorControls, PanelColorSettings, InnerBlocks, MediaUpload } = wp.editor;
const { RangeControl, CheckboxControl, PanelBody, Button} = wp.components;
import { getStyles, typographyArr } from './block';
import { InspectorContainer, ContainerEdit, uo } from '../commonComponents/container/container';
import { TypographyContainer, getTypography } from '../commonComponents/typography/typography';
import { linkPicker } from '../commonComponents/link/link';

/**
 * The edit function describes the structure of your block in the context of the editor.
 * This represents what the editor will render when the block is used.
 *
 * The "edit" property must be a valid function.
 * @param {Object} props - attributes
 * @returns {Node} rendered component
 */
export default class Edit extends Component {

    constructor(props){
        super(props);
        this.state = { popupVisibleIndex: -1 };
        this.handlePicker = this.handlePicker.bind(this);
    }

    handlePicker(){this.setState({ popupVisibleIndex: 0, });}

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
                        title={ __( 'General', 'kenzap-cta' ) }
                        initialOpen={ false }
                        >

                        <RangeControl
                            label={ __( 'Gradient opacity', 'kenzap-cta' ) }
                            value={ attributes.opacity }
                            onChange={ ( opacity ) => setAttributes( { opacity } ) }
                            min={ 1 }
                            max={ 100 }
                        />

                        <RangeControl
                            label={ __( 'Gradient angle', 'kenzap-cta' ) }
                            value={ attributes.angle }
                            onChange={ ( angle ) => setAttributes( { angle } ) }
                            min={ 0 }
                            max={ 360 }
                        />

                        <p style={ { marginBottom: '5px' } }>{ __( 'Icon', 'kenzap-cta' ) }</p>
                        <MediaUpload
                            onSelect={ ( media ) => {
                                setAttributes( { "img1":media.url, "alt1":media.alt } )
                            } }
                            value={ attributes.img1 }
                            allowedTypes={ [ 'image' ] }
                            render={ ( mediaUploadProps ) => (

                            <Fragment>
                                { ( attributes.img1 !== 'none' ) ? (
                                    <Fragment>
                                        <Button
                                            isDefault
                                            onClick={ () => { 
                                                setAttributes( { "img1":'none' } )
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
                                                backgroundImage: `url(${ [ attributes.img1 ? uo(attributes.img1) : '' ] })`,
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

                        <RangeControl
                            label={ __( 'Icon size', 'kenzap-cta' ) }
                            value={ attributes.img1Size }
                            onChange={ ( img1Size ) => setAttributes( { img1Size } ) }
                            min={ 0 }
                            max={ 200 }
                        />
                    </PanelBody>

                    <PanelColorSettings
                        title={ __( 'Colors', 'kenzap-cta' ) }
                        initialOpen={ false }
                        colorSettings={ [
                            {
                                value: attributes.textColor2,
                                onChange: ( value ) => {
                                    return setAttributes( { textColor2: value } );
                                },
                                label: __( 'Circle', 'kenzap-cta' ),
                            },
                            {
                                value: attributes.textColor23,
                                onChange: ( value ) => {
                                    return setAttributes( { textColor23: value } );
                                },
                                label: __( 'Date', 'kenzap-cta' ),
                            },
                            {
                                value: attributes.textColor3,
                                onChange: ( value ) => {
                                    return setAttributes( { textColor3: value } );
                                },
                                label: __( 'Gradient start', 'kenzap-cta' ),
                            },
                            {
                                value: attributes.textColor4,
                                onChange: ( value ) => {
                                    return setAttributes( { textColor4: value } );
                                },
                                label: __( 'Gradient end', 'kenzap-cta' ),
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
                    
                <div id={ attributes.anchor } className={ className ? className : '' } style={ vars } >
                    <ContainerEdit
                        className={ `kp-bn1 block-${ attributes.blockUniqId } ${ isSelected ? 'selected' : '' } ` }
                        attributes={ attributes }
                        withBackground
                        withPadding
                        >

                        <div class="kenzap-container" style={ kenzapContanerStyles }>
                            { attributes.nestedBlocks == 'top' && <InnerBlocks /> }
                            <div class="kp-content">
                                <div class="date">

                                    <RichText
                                        tagName="span"
                                        className="day"
                                        value={ attributes.day }
                                        placeholder={ __( 'Day', 'kenzap-cta' ) }
                                        onChange={ ( day ) => {
                                            setAttributes( { day: day } )
                                        } } />

                                    <RichText
                                        tagName="span"
                                        className="month"
                                        value={ attributes.month }
                                        placeholder={ __( 'Month', 'kenzap-cta' ) }
                                        onChange={ ( month ) => {
                                            setAttributes( { month: month } )
                                        } } />
                                </div>

                                <RichText
                                    tagName="h1"
                                    className="title"
                                    value={ attributes.title }
                                    placeholder={ __( 'Title', 'kenzap-cta' ) }
                                    onChange={ ( title ) => {
                                        setAttributes( { title: title } )
                                    } }
                                    style={ getTypography( attributes, 0 ) }
                                    />
                                    
                                <RichText
                                    tagName="p"
                                    className="caption"
                                    value={ attributes.subtitle }
                                    placeholder={ __( 'Caption', 'kenzap-cta' ) }
                                    onChange={ ( subtitle ) => {
                                        setAttributes( { subtitle: subtitle } )
                                    } }
                                    style={ getTypography( attributes, 1 ) }
                                    />

                                <div class="location">
                                    <p>
                                        { attributes.img1 != 'none' && <img style={ { width: `${ attributes.img1Size }px`  } } src={ uo(attributes.img1) } alt={ __( 'location icon', 'kenzap-cta' ) }/> }
                                        <RichText
                                            tagName="span"
                                            className="kp-loc"
                                            value={ attributes.location }
                                            placeholder={ __( 'Location', 'kenzap-cta' ) }
                                            onChange={ ( location ) => {
                                                setAttributes( { location: location } )
                                            } }
                                            style={ getTypography( attributes, 2 ) }
                                            />
                                    </p>
                                </div>

                                <div class="action">
                                    <RichText
                                        tagName="div"
                                        className="kp-left"
                                        value={ attributes.left }
                                        placeholder={ __( 'Notice', 'kenzap-cta' ) }
                                        onChange={ ( left ) => {
                                            setAttributes( { left: left } )
                                        } }
                                        style={ getTypography( attributes, 3 ) }
                                        />

                                        <a
                                            style={ getTypography( attributes, 4 ) }
                                            className="kp-a" 
                                            onClick={ this.handlePicker }
                                            >
                                            { attributes.btnText ? attributes.btnText:"Button Text" }
                                            { this.state.popupVisibleIndex === 0 && linkPicker( this ) }
                                        </a>
                                                
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
