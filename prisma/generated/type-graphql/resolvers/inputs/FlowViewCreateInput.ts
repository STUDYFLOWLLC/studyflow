import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlowCreateNestedOneWithoutFK_FlowViewInput } from "../inputs/FlowCreateNestedOneWithoutFK_FlowViewInput";
import { UserCreateNestedOneWithoutFK_FlowViewInput } from "../inputs/UserCreateNestedOneWithoutFK_FlowViewInput";

@TypeGraphQL.InputType("FlowViewCreateInput", {
  isAbstract: true
})
export class FlowViewCreateInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  CreatedTime?: Date | undefined;

  @TypeGraphQL.Field(_type => FlowCreateNestedOneWithoutFK_FlowViewInput, {
    nullable: true
  })
  FK_Flow?: FlowCreateNestedOneWithoutFK_FlowViewInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutFK_FlowViewInput, {
    nullable: true
  })
  FK_User?: UserCreateNestedOneWithoutFK_FlowViewInput | undefined;
}
