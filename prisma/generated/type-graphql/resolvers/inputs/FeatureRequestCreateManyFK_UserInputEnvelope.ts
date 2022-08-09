import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FeatureRequestCreateManyFK_UserInput } from "../inputs/FeatureRequestCreateManyFK_UserInput";

@TypeGraphQL.InputType("FeatureRequestCreateManyFK_UserInputEnvelope", {
  isAbstract: true
})
export class FeatureRequestCreateManyFK_UserInputEnvelope {
  @TypeGraphQL.Field(_type => [FeatureRequestCreateManyFK_UserInput], {
    nullable: false
  })
  data!: FeatureRequestCreateManyFK_UserInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
