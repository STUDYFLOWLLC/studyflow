import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlowCreateWithoutFK_FlowViewInput } from "../inputs/FlowCreateWithoutFK_FlowViewInput";
import { FlowUpdateWithoutFK_FlowViewInput } from "../inputs/FlowUpdateWithoutFK_FlowViewInput";

@TypeGraphQL.InputType("FlowUpsertWithoutFK_FlowViewInput", {
  isAbstract: true
})
export class FlowUpsertWithoutFK_FlowViewInput {
  @TypeGraphQL.Field(_type => FlowUpdateWithoutFK_FlowViewInput, {
    nullable: false
  })
  update!: FlowUpdateWithoutFK_FlowViewInput;

  @TypeGraphQL.Field(_type => FlowCreateWithoutFK_FlowViewInput, {
    nullable: false
  })
  create!: FlowCreateWithoutFK_FlowViewInput;
}
