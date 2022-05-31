import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlashCardStackCreateManyFK_UserInput } from "../inputs/FlashCardStackCreateManyFK_UserInput";

@TypeGraphQL.InputType("FlashCardStackCreateManyFK_UserInputEnvelope", {
  isAbstract: true
})
export class FlashCardStackCreateManyFK_UserInputEnvelope {
  @TypeGraphQL.Field(_type => [FlashCardStackCreateManyFK_UserInput], {
    nullable: false
  })
  data!: FlashCardStackCreateManyFK_UserInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
