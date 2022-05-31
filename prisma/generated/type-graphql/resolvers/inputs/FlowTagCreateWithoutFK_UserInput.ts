import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlowTagOnFlowCreateNestedManyWithoutFK_FlowTagInput } from "../inputs/FlowTagOnFlowCreateNestedManyWithoutFK_FlowTagInput";

@TypeGraphQL.InputType("FlowTagCreateWithoutFK_UserInput", {
  isAbstract: true
})
export class FlowTagCreateWithoutFK_UserInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  CreatedTime?: Date | undefined;

  @TypeGraphQL.Field(_type => FlowTagOnFlowCreateNestedManyWithoutFK_FlowTagInput, {
    nullable: true
  })
  FK_Flows?: FlowTagOnFlowCreateNestedManyWithoutFK_FlowTagInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  Public?: boolean | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  Name!: string;
}
