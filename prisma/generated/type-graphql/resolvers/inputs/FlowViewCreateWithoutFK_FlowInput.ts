import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedOneWithoutFK_FlowViewInput } from "../inputs/UserCreateNestedOneWithoutFK_FlowViewInput";

@TypeGraphQL.InputType("FlowViewCreateWithoutFK_FlowInput", {
  isAbstract: true
})
export class FlowViewCreateWithoutFK_FlowInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  CreatedTime?: Date | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutFK_FlowViewInput, {
    nullable: true
  })
  FK_User?: UserCreateNestedOneWithoutFK_FlowViewInput | undefined;
}
