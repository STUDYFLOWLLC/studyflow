import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlowCreateNestedOneWithoutFK_FlowViewInput } from "../inputs/FlowCreateNestedOneWithoutFK_FlowViewInput";

@TypeGraphQL.InputType("FlowViewCreateWithoutFK_UserInput", {
  isAbstract: true
})
export class FlowViewCreateWithoutFK_UserInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  CreatedTime?: Date | undefined;

  @TypeGraphQL.Field(_type => FlowCreateNestedOneWithoutFK_FlowViewInput, {
    nullable: true
  })
  FK_Flow?: FlowCreateNestedOneWithoutFK_FlowViewInput | undefined;
}
