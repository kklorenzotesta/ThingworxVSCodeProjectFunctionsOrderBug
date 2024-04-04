function f2() {
  logger.error("F2");
}

function f1() {
  f2();
}

@ThingDefinition
class ThingB extends GenericThing {
  test() {
    f1();
  }
}
