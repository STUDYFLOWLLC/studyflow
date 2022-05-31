import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedOneWithoutFK_FlowTagsInput } from "../inputs/UserCreateNestedOneWithoutFK_FlowTagsInput";

@TypeGraphQL.InputType("FlowTagCreateWithoutFK_FlowsInput", {
  isAbstract: true
})
export class FlowTagCreateWithoutFK_FlowsInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  CreatedTime?: Date | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutFK_FlowTagsInput, {
    nullable: true
  })
  FK_User?: UserCreateNestedOneWithoutFK_FlowTagsInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  Public?: boolean | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  Name!: string;
}
