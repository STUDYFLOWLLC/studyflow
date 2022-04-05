import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlowUpdateWithoutCreatedByUserInput } from "../inputs/FlowUpdateWithoutCreatedByUserInput";
import { FlowWhereUniqueInput } from "../inputs/FlowWhereUniqueInput";

@TypeGraphQL.InputType("FlowUpdateWithWhereUniqueWithoutCreatedByUserInput", {
  isAbstract: true
})
export class FlowUpdateWithWhereUniqueWithoutCreatedByUserInput {
  @TypeGraphQL.Field(_type => FlowWhereUniqueInput, {
    nullable: false
  })
  where!: FlowWhereUniqueInput;

  @TypeGraphQL.Field(_type => FlowUpdateWithoutCreatedByUserInput, {
    nullable: false
  })
  data!: FlowUpdateWithoutCreatedByUserInput;
}
