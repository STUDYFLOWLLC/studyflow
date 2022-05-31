import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FlowTagCreateManyInput } from "../../../inputs/FlowTagCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyFlowTagArgs {
  @TypeGraphQL.Field(_type => [FlowTagCreateManyInput], {
    nullable: false
  })
  data!: FlowTagCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
