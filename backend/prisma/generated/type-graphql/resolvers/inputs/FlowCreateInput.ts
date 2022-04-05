import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedOneWithoutFlowsInput } from "../inputs/UserCreateNestedOneWithoutFlowsInput";
import { Visibility } from "../../enums/Visibility";

@TypeGraphQL.InputType("FlowCreateInput", {
  isAbstract: true
})
export class FlowCreateInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  CreatedTime?: Date | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutFlowsInput, {
    nullable: true
  })
  CreatedByUser?: UserCreateNestedOneWithoutFlowsInput | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  Title?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  Body?: string | undefined;

  @TypeGraphQL.Field(_type => Visibility, {
    nullable: true
  })
  Visibility?: "HIDDEN" | "PRIVATE" | "PUBLIC" | undefined;
}
