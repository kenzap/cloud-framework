const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const { RichText, InspectorControls, PanelColorSettings, MediaUpload, InnerBlocks } = wp.editor;
const { PanelBody, Toolbar, TextControl, Button, SelectControl } = wp.components;
import { getStyles, typographyArr } from './block';
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

	createLevelControl( targetLevel, selectedLevel, onChange ) {
		return {
			icon: 'heading',
			title: "H"+targetLevel,
			isActive: targetLevel === selectedLevel,
			onClick: () => onChange( targetLevel ),
			subscript: String( targetLevel ),
		};
    }

    recalcIconOffset(value, iconWidth){

        switch(value){
            case "tl": this.props.setAttributes( { iconPos: value, iconTop:'10px', iconRight:'auto', iconBottom:'auto', iconLeft:'0px' } ); break;
            case "tr": this.props.setAttributes( { iconPos: value, iconTop:'10px', iconRight:'0px', iconBottom:'auto', iconLeft:'auto' } ); break;
            case "tc": this.props.setAttributes( { iconPos: value, iconTop:'10px', iconRight:'0px', iconBottom:'auto', iconLeft:'calc(50% - '+Number(iconWidth.replace(/[^\d]/g,''))/2+'px)' } ); break;
            case "bl": this.props.setAttributes( { iconPos: value, iconTop:'auto', iconRight:'auto', iconBottom:'10px', iconLeft:'0px' } ); break;
            case "br": this.props.setAttributes( { iconPos: value, iconTop:'auto', iconRight:'0px', iconBottom:'10px', iconLeft:'auto' } ); break;
            case "bc": this.props.setAttributes( { iconPos: value, iconTop:'auto', iconRight:'0px', iconBottom:'10px', iconLeft:'calc(50% - '+Number(iconWidth.replace(/[^\d]/g,''))/2+'px)' } ); break;
        }
    }
    
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
                        title={ __( 'General', 'kenzap-plugin' ) }
                        initialOpen={ false }
                    >

                        <p style={ { paddingBottom: '5px' } }>{ __( 'Level' ) }</p>
                        <Toolbar controls={ [ '1', '2', '3', '4', '5', '6' ].map( ( index ) => this.createLevelControl( index, attributes.level, ( newLevel ) => setAttributes( { level: newLevel } ) ) ) } />

                        <p style={ { marginBottom: '5px' } }>{ __( 'Icon (SVG only)', 'kenzap-plugin' ) }</p>
                        <MediaUpload
                            onSelect={ ( media ) => {
                                setAttributes( { icon: media.url } );
                            } }
                            value={ attributes.icon }
                            //allowedTypes={ [ 'image/svg' ] }
                            render={ ( mediaUploadProps ) => (

                            <Fragment>
                                { ( attributes.icon !== 'none' ) ? (
                                    <Fragment>
                                        <Button
                                            isDefault
                                            onClick={ () => { 
                                                setAttributes( { icon: 'none' } );
                                            } }
                                        >
                                        { __( 'Remove', 'kenzap-plugin' ) }
                                        </Button>
                                        <div
                                            style={ {
                                                width: '27px',
                                                height: '27px',
                                                display: 'inline-block',
                                                margin: '0 0 8px 5px',
                                                backgroundImage: `url(${ [ attributes.icon ? uo(attributes.icon) : '' ] })`,
                                                backgroundRepeat: 'no-repeat',
                                                backgroundSize: 'cover',
                                            } }
                                        />

                                    </Fragment>
                                ) : (
                                    <Button isDefault onClick={ mediaUploadProps.open } style={ { margin: '0 0 8px 0px', } }>
                                        { __( 'Upload/Choose', 'kenzap-plugin' ) }
                                    </Button>
                                ) }
                            </Fragment>

                            ) }
                        />

                        <p style={ { fontStyle: 'italic' } }>
                            { __( 'Images with transparent background are recommended.', 'kenzap-plugin' ) }
                        </p>

                        { attributes.icon !== 'none' && <PanelBody
                            title={ __( 'Icon settings', 'kenzap-plugin' ) }
                            initialOpen={ true }
                        >

                            <TextControl
                                label={ __( 'Width', 'kenzap-plugin' ) }
                                value={ attributes.iconWidth }
                                onChange={ ( iconWidth ) => {
                                    setAttributes( { iconWidth } );
                                    this.recalcIconOffset(attributes.iconPos, iconWidth);
                                } }
                                help={ __( 'Specify icon width in pixels or percentage. Example: 100px, 50%', 'kenzap-plugin' ) }
                            />

                            <TextControl
                                label={ __( 'Height', 'kenzap-plugin' ) }
                                value={ attributes.iconHeight }
                                onChange={ ( iconHeight ) => {
                                    this.recalcIconOffset(attributes.iconPos, attributes.iconWidth);
                                    setAttributes( { iconHeight } ) 
                                } }
                                help={ __( 'Specify icon width in pixels or percentage. Example: 100px, 50%', 'kenzap-plugin' ) }
                            />

                            <SelectControl
                                label={ __( 'Position', 'kenzap-plugin' ) }
                                value={ attributes.iconPos }
                                options={ [
                                        { label: __( 'Top left', 'kenzap-plugin' ), value: 'tl' },
                                        { label: __( 'Top right', 'kenzap-plugin' ), value: 'tr' },
                                        { label: __( 'Top center', 'kenzap-plugin' ), value: 'tc' },
                                        { label: __( 'Bottom left', 'kenzap-plugin' ), value: 'bl' },
                                        { label: __( 'Bottom right', 'kenzap-plugin' ), value: 'br' },
                                        { label: __( 'Bottom center', 'kenzap-plugin' ), value: 'bc' },
                                    ] }
                                onChange={ ( value ) => {
                                    this.recalcIconOffset(value, attributes.iconWidth);
                                } }
                                help={ __( 'Icon location inside heading container. Use "Paddings" and "Line height" settings to adjust icon offset.', 'kenzap-plugin' ) }
                            />

                        </PanelBody> }

                    </PanelBody>

                    { attributes.icon !== 'none' && <PanelColorSettings
                        title={ __( 'Colors', 'kenzap-plugin' ) }
                        initialOpen={ false }
                        colorSettings={ [
                            {
                                value: attributes.textColor2,
                                onChange: ( textColor2 ) => {
                                    return setAttributes( { textColor2 } );
                                },
                                label: __( 'Icon', 'kenzap-plugin' ),
                            },
                        ] }
                    /> }
                                   
                    <TypographyContainer
                        setAttributes={ setAttributes }
                        typographyArr={ typographyArr }
                        typography={ attributes.typography }
                        //
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
                <div id={ attributes.anchor } className={ className ? className : '' } style={ vars }>
                    <ContainerEdit
                        className={ `kphd-1 ${ isSelected ? 'selected' : '' } ` }
                        attributes={ attributes }
                        withBackground
                        withPadding
                    >
                        <div className="kenzap-tcont" style={ {...kenzapContanerStyles, ...getTypography( attributes, 0, "text-align" ) } }
                        >
                            { attributes.nestedBlocks == 'top' && <InnerBlocks /> }
                            <RichText
                                className="kp-h"
                                tagName={ "h"+attributes.level }
                                placeholder={ __( 'Type title..', 'kenzap-plugin' ) }
                                value={ attributes.title }
                                onChange={ ( value ) => setAttributes( { title: value } ) }
                                style={ getTypography( attributes, 0 ) }
                            />
                            { attributes.nestedBlocks == 'bottom' && <InnerBlocks /> }
                        </div>
                        
                    </ContainerEdit>
                </div>
            </div>
        );
    }
}
