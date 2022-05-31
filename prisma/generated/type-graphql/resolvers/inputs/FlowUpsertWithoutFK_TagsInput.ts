import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlowCreateWithoutFK_TagsInput } from "../inputs/FlowCreateWithoutFK_TagsInput";
import { FlowUpdateWithoutFK_TagsInput } from "../inputs/FlowUpdateWithoutFK_TagsInput";

@TypeGraphQL.InputType("FlowUpsertWithoutFK_TagsInput", {
  isAbstract: true
})
export class FlowUpsertWithoutFK_TagsInput {
  @TypeGraphQL.Field(_type => FlowUpdateWithoutFK_TagsInput, {
    nullable: false
  })
  update!: FlowUpdateWithoutFK_TagsInput;

  @TypeGraphQL.Field(_type => FlowCreateWithoutFK_TagsInput, {
    nullable: false
  })
  create!: FlowCreateWithoutFK_TagsInput;
}
