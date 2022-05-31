import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FlowTagOnFlowCreateManyInput } from "../../../inputs/FlowTagOnFlowCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyFlowTagOnFlowArgs {
  @TypeGraphQL.Field(_type => [FlowTagOnFlowCreateManyInput], {
    nullable: false
  })
  data!: FlowTagOnFlowCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
