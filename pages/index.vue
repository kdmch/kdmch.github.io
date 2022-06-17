<template>
  <section class="section">
    <div style="position: fixed; z-index: -1;">
      <div 
        id="three-element" 
        ref="threeElement"/>

    </div>
    <div style="margin: 0 auto;">
      <Applike />
    </div>
  </section>
</template>

<script>
import * as THREE from "three";
import Applike from '~/components/Applike.vue';

export default {
  components: { Applike },
  head() {
    return {
      meta: [
        { hid: 'og:title', property: 'og:title', content: '' },
        { hid: 'og:description', property: 'og:description', content: '' },
        { hid: 'og:url', property: 'og:url', content: '' },
        { hid: 'og:image', property: 'og:image', content: '' },
      ]
    }
  },
  data() {
    return {
      scene: undefined,
      camera: undefined,
      renderer: undefined,
      stats: undefined,
      cube: undefined,
      started: false,
      step: 0,
      clock: undefined
    };
  },
  mounted() {
    this.setup();
    this.init();
    this.$refs.threeElement.appendChild(this.renderer.domElement);
  },

  methods: {
    setup() {
      const axes = new THREE.AxesHelper(20);
      this.scene = new THREE.Scene();
      this.camera = new THREE.PerspectiveCamera(
        45,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );

      this.renderer = new THREE.WebGLRenderer( {alpha: true} );
      this.renderer.setClearColor(0x1f1e1c, 1);
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      this.renderer.shadowMap.enabled = true;
      this.renderer.shadowMapSoft = true;
      this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

      //this.scene.add(axes);
      this.scene.background = new THREE.Color( 0xffffff );

      window.addEventListener("resize", this.handleWindowResize);
    },
    handleWindowResize() {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
    },




    init() {
      const material = new THREE.MeshPhysicalMaterial({
        opacity: 0.4,
        transmission: 1,
        roughness: 0.5,
        ior: 1.2,
        thickness: 1,
        depthTest: false,
        alphaToCoverage: true,
        color: 0xffffff,
      });

      const bgmaterial = new THREE.MeshPhysicalMaterial({

        opacity: 0.4,
        transmission: 1,
        roughness: 0.5,
        ior: 1.2,
        thickness: 1,
        depthTest: false,
        alphaToCoverage: true,
        color: 0xffffff,
      }); 

      const cubeGeometry = new THREE.IcosahedronGeometry(1,0);
      const bgGeometry = new THREE.IcosahedronGeometry(1.5,0);

      this.cube1 = new THREE.Mesh(cubeGeometry, material);
      this.cube1.position.set(0, 0, 2.5);
      this.cube1.rotation.set(0.5, 0.5, 0.5);
      this.scene.add(this.cube1);

      this.cube2 = new THREE.Mesh(cubeGeometry, material);
      this.cube2.position.set(-1, 1, 2);
      this.cube2.rotation.set(0.2, 0.2, 0.2);
      this.scene.add(this.cube2);

      this.bg1 = new THREE.Mesh(bgGeometry,bgmaterial);
      this.bg1.position.set(0, 0, 2);
      this.bg1.rotation.set(0.2, 0.2, 0.2);
      this.scene.add(this.bg1);
      
      const light = new THREE.DirectionalLight(0xffffff, 1);
      light.position.set(-4, 0, 0);
      this.scene.add(light);

      const spotLight = new THREE.SpotLight(0xffffff);
      spotLight.position.set(-40, 40, -15);
      spotLight.shadow.mapSize = new THREE.Vector2(1024, 1024);
      spotLight.shadow.camera.far = 130;
      spotLight.shadow.camera.near = 40;
      spotLight.castShadow = true;
      spotLight.decay = 2;
      spotLight.penumbra = 0.05;
      //this.scene.add(spotLight);

      this.camera.position.set(0,0,5);
      this.camera.lookAt(this.scene.position);

      this.animate();
    },
    
    animate() {
      requestAnimationFrame( this.animate );
      
      this.cube1.rotation.x += 0.004;
      this.cube2.rotation.y += 0.004;
      this.bg1.rotation.z += 0.004;
      
      this.renderer.render(this.scene, this.camera);
    }

  }
};
</script>

<style scoped>

</style>